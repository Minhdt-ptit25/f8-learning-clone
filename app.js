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
    function init() {
        loadCourse(currentCourseId);
        
        // Event Listeners
        courseSelect.addEventListener('change', (e) => {
            currentCourseId = e.target.value;
            completedLessons.clear(); // Reset progress on course change
            loadCourse(currentCourseId);
        });

        runCodeBtn.addEventListener('click', () => {
            codeEditor.runCode();
            // In a real app we'd verify the output against expected test cases
            // Here we just mark as complete if they run the code without errors
            if (document.getElementById('consoleOutput').querySelector('.error') === null) {
                markCurrentLessonComplete();
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
    }

    async function loadCourse(courseId) {
        try {
            const response = await fetch(`http://localhost:3000/api/courses/${courseId}`);
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
    }

    function getLessonTypeLabel(type) {
        switch(type) {
            case 'theory': return 'Lý thuyết';
            case 'code': return 'Thực hành viết Code';
            case 'quiz': return 'Trắc nghiệm';
            default: return 'Bài học';
        }
    }

    function markCurrentLessonComplete() {
        if (!currentLessonId) return;
        
        completedLessons.add(currentLessonId);
        
        // Update UI
        const lessonEl = document.querySelector(`.lesson-item[data-id="${currentLessonId}"]`);
        if (lessonEl && !lessonEl.classList.contains('completed')) {
            lessonEl.classList.add('completed');
            const iconEl = lessonEl.querySelector('.lesson-icon i');
            // Change icon to checkmark
            iconEl.className = 'fa-solid fa-circle-check';
        }
    }

    // Start
    init();
});
