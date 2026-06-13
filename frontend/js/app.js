document.addEventListener('DOMContentLoaded', () => {
    // Globals
    let currentCourseId = 'js-basic';
    let currentLessonId = null;
    let completedLessons = new Set();
    let currentCourseData = null;

    // UI Elements
    const courseSelect = document.getElementById('courseSelect');
    const lessonListEl = document.getElementById('lessonList');
    const lessonTitleEl = document.getElementById('lessonTitle');
    const theorySection = document.getElementById('theorySection');
    const lessonContentEl = document.getElementById('lessonContent');

    const interactiveSection = document.getElementById('interactiveSection');
    const editorMode = document.getElementById('editorMode');
    const quizMode = document.getElementById('quizMode');
    const runCodeBtn = document.getElementById('runCodeBtn');
    const hintCodeBtn = document.getElementById('hintCodeBtn');

    // Initialize modules
    const codeEditor = new CodeEditor('codeEditor', 'consoleOutput');
    const quizManager = new QuizManager();

    // Mobile Menu UI
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    function toggleSidebar() {
        sidebar.classList.toggle('show');
        sidebarOverlay.classList.toggle('show');
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleSidebar);
    }
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', toggleSidebar);
    }

    // Init App
    async function init() {
        await loadProgress();
        loadCourse(currentCourseId);

        // Event Listeners
        courseSelect.addEventListener('change', async (e) => {
            currentCourseId = e.target.value;
            await loadProgress(); // Load progress again when course changes
            loadCourse(currentCourseId);
        });

        runCodeBtn.addEventListener('click', () => {
            const userCode = codeEditor.getCode().trim();
            const placeholder = '// Viết code của bạn ở đây...';
            
            // Xóa output cũ và chạy code của user
            codeEditor.runCode();

            if (userCode === '' || userCode === placeholder) {
                codeEditor.appendOutput('❌ Vui lòng viết code của bạn trước khi chạy!', 'error');
                return;
            }

            const consoleOutputEl = document.getElementById('consoleOutput');
            const hasError = consoleOutputEl.querySelector('.error') !== null;
            
            if (hasError) return; // Nếu code user có lỗi JS thì không pass

            // Tìm bài học hiện tại để lấy đáp án (solution)
            const course = currentCourseData;
            let lesson = null;
            if (course && currentLessonId) {
                for (const chapter of course.chapters) {
                    lesson = chapter.lessons.find(l => l.id === currentLessonId);
                    if (lesson) break;
                }
            }

            if (lesson && lesson.solution) {
                // Chạy giả lập solution để lấy expected output
                let solutionOutput = [];
                const mockConsole = {
                    log: (...args) => solutionOutput.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')),
                    error: (...args) => solutionOutput.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')),
                    warn: (...args) => solutionOutput.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '))
                };

                try {
                    let execCode = lesson.solution
                        .replace(/console\.log/g, 'mockConsole.log')
                        .replace(/console\.error/g, 'mockConsole.error')
                        .replace(/console\.warn/g, 'mockConsole.warn');
                    const executor = new Function('mockConsole', execCode);
                    executor(mockConsole);

                    // Lấy output của user
                    const userOutputEls = consoleOutputEl.querySelectorAll('.log, .warn');
                    let userOutput = Array.from(userOutputEls).map(el => el.textContent);

                    // So sánh
                    const isPassed = JSON.stringify(solutionOutput) === JSON.stringify(userOutput);

                    if (isPassed) {
                        codeEditor.appendOutput('✅ Chính xác! Bạn đã hoàn thành bài tập.', 'success');
                        markCurrentLessonComplete();
                    } else {
                        codeEditor.appendOutput('❌ Code chạy được nhưng kết quả in ra chưa đúng yêu cầu!', 'error');
                    }
                } catch (e) {
                    console.error("Lỗi khi chạy solution ngầm:", e);
                    markCurrentLessonComplete(); // Fallback
                }
            } else {
                markCurrentLessonComplete(); // Không có solution thì cho pass mặc định
            }
        });

        hintCodeBtn.addEventListener('click', () => {
            const course = currentCourseData;
            if (!course || !currentLessonId) return;

            let lesson = null;
            for (const chapter of course.chapters) {
                lesson = chapter.lessons.find(l => l.id === currentLessonId);
                if (lesson) break;
            }

            if (lesson && lesson.solution) {
                codeEditor.setCode(lesson.solution);
            } else if (lesson && lesson.initialCode) {
                codeEditor.setCode(lesson.initialCode);
            } else {
                alert('Không có gợi ý cho bài học này!');
            }
        });

        // Listen for quiz completion
        document.addEventListener('lessonCompleted', () => {
            markCurrentLessonComplete();
        });

        // Listen for Auth changes (from auth.js)
        document.addEventListener('authStateChanged', async () => {
            await loadProgress();
            // Re-render course to show/hide checkmarks
            if (currentCourseData) loadCourse(currentCourseId);
        });
    }

    async function loadProgress() {
        completedLessons.clear();
        const token = localStorage.getItem('f8_token');
        if (!token) return;

        try {
            const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
                ? 'http://localhost:3000'
                : 'https://f8-learning-clone.onrender.com';
                
            const res = await fetch(`${API_URL}/api/progress`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            if (data.success && data.progress) {
                data.progress.forEach(id => completedLessons.add(id));
            }
        } catch (e) {
            console.error('Lỗi khi lấy tiến độ:', e);
        }
    }

    async function loadCourse(courseId) {
        try {
            const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
                ? 'http://localhost:3000'
                : 'https://f8-learning-clone.onrender.com';
            const response = await fetch(`${API_URL}/api/courses/${courseId}`);
            if (!response.ok) throw new Error('Course fetch failed');
            currentCourseData = await response.json();
        } catch (error) {
            console.error('Lỗi khi tải khóa học:', error);
            lessonListEl.innerHTML = '<p style="padding: 15px; color: #f44336;">Không thể kết nối đến Backend Server. Hãy đảm bảo bạn đã chạy lệnh "node server.js" ở port 3000.</p>';
            return;
        }

        const course = currentCourseData;

        // Render Sidebar
        lessonListEl.innerHTML = '';

        course.chapters.forEach((chapter, chapterIndex) => {
            const chapterHeader = document.createElement('div');
            chapterHeader.className = 'chapter-header';
            chapterHeader.innerHTML = `<h4>${chapter.title}</h4> <i class="fa-solid fa-chevron-down"></i>`;
            lessonListEl.appendChild(chapterHeader);

            const chapterLessonsContainer = document.createElement('div');
            chapterLessonsContainer.className = 'chapter-lessons';
            lessonListEl.appendChild(chapterLessonsContainer);

            chapterHeader.addEventListener('click', () => {
                chapterHeader.classList.toggle('collapsed');
                chapterLessonsContainer.classList.toggle('collapsed');
            });

            chapter.lessons.forEach((lesson, index) => {
                const lessonEl = document.createElement('div');
                lessonEl.className = 'lesson-item';
                lessonEl.dataset.id = lesson.id;

                // Icon based on type
                let iconClass = 'fa-solid fa-file-lines'; // theory
                if (lesson.type === 'code') iconClass = 'fa-solid fa-code';
                if (lesson.type === 'quiz') iconClass = 'fa-solid fa-circle-question';

                lessonEl.innerHTML = `
                    <div class="lesson-icon">
                        <i class="${iconClass}"></i>
                    </div>
                    <div class="lesson-info">
                        <h4>${index + 1}. ${lesson.title}</h4>
                        <p>${getLessonTypeLabel(lesson.type)}</p>
                    </div>
                `;

                if (completedLessons.has(lesson.id)) {
                    lessonEl.classList.add('completed');
                    lessonEl.innerHTML += `<div class="check-icon"><i class="fa-solid fa-check"></i></div>`;
                }

                lessonEl.addEventListener('click', () => {
                    loadLesson(lesson.id);
                    if (window.innerWidth <= 768) {
                        document.querySelector('.sidebar').classList.remove('show');
                        document.getElementById('sidebarOverlay').classList.remove('show');
                    }
                });
                chapterLessonsContainer.appendChild(lessonEl);
            });
        });

        // Load first lesson by default
        if (course.chapters.length > 0 && course.chapters[0].lessons.length > 0) {
            loadLesson(course.chapters[0].lessons[0].id);
        }
    }

    function loadLesson(lessonId) {
        currentLessonId = lessonId;
        const course = currentCourseData;

        let lesson = null;
        for (const chapter of course.chapters) {
            lesson = chapter.lessons.find(l => l.id === lessonId);
            if (lesson) break;
        }

        if (!lesson) return;

        // Update active state in sidebar
        document.querySelectorAll('.lesson-item').forEach(el => {
            el.classList.remove('active');
            if (el.dataset.id === lessonId) el.classList.add('active');
        });

        // Render Content
        lessonTitleEl.textContent = lesson.title;

        // Show/hide sections based on type
        if (lesson.type === 'theory') {
            theorySection.style.display = 'block';
            interactiveSection.style.display = 'none';
            lessonContentEl.innerHTML = lesson.content;

            // Theory is auto-completed when viewed
            markCurrentLessonComplete();
        }
        else if (lesson.type === 'code') {
            theorySection.style.display = 'block';
            lessonContentEl.innerHTML = lesson.content;

            interactiveSection.style.display = 'flex';
            editorMode.style.display = 'flex';
            quizMode.style.display = 'none';

            codeEditor.clearOutput();
            codeEditor.setCode('// Viết code của bạn ở đây...\n');
        }
        else if (lesson.type === 'quiz') {
            // Quiz might not have theory content, hide if empty
            if (lesson.content) {
                theorySection.style.display = 'block';
                lessonContentEl.innerHTML = lesson.content;
            } else {
                theorySection.style.display = 'none';
            }

            interactiveSection.style.display = 'flex';
            editorMode.style.display = 'none';
            quizMode.style.display = 'block';

            quizManager.loadQuiz(lesson.quiz);
        }

        // Thêm highlight syntax cho các block code trong lý thuyết
        if (window.hljs) {
            lessonContentEl.querySelectorAll('pre code').forEach((block) => {
                // Ép kiểu Javascript nếu chưa có class để Highlight.js nhận diện đúng
                if (!block.className) {
                    block.className = 'language-javascript';
                }
                hljs.highlightElement(block);
            });
        }
    }

    function getLessonTypeLabel(type) {
        switch (type) {
            case 'theory': return 'Lý thuyết';
            case 'code': return 'Thực hành viết Code';
            case 'quiz': return 'Trắc nghiệm';
            default: return 'Bài học';
        }
    }

    async function markCurrentLessonComplete() {
        if (!currentLessonId) return;

        // Bắn API nếu đã đăng nhập và bài này chưa hoàn thành
        if (!completedLessons.has(currentLessonId)) {
            const token = localStorage.getItem('f8_token');
            if (token) {
                try {
                    const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
                        ? 'http://localhost:3000'
                        : 'https://f8-learning-clone.onrender.com';
                        
                    await fetch(`${API_URL}/api/progress/complete`, {
                        method: 'POST',
                        headers: { 
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}` 
                        },
                        body: JSON.stringify({ lessonId: currentLessonId })
                    });
                } catch (e) {
                    console.error('Lỗi lưu tiến độ:', e);
                }
            }
        }

        completedLessons.add(currentLessonId);

        // Update UI
        const lessonEl = document.querySelector(`.lesson-item[data-id="${currentLessonId}"]`);
        if (lessonEl && !lessonEl.classList.contains('completed')) {
            lessonEl.classList.add('completed');
            const iconEl = lessonEl.querySelector('.lesson-icon i');
            // Change icon to checkmark
            iconEl.className = 'fa-solid fa-circle-check';
            lessonEl.innerHTML += `<div class="check-icon"><i class="fa-solid fa-check"></i></div>`;
        }
    }

    // Start
    init();
});
