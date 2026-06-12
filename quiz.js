class QuizManager {
    constructor() {
        this.listContainer = document.getElementById('quizListContainer');
        this.resultContainer = document.getElementById('quizResult');
        
        this.questions = [];
        this.selections = {};
        this.isSubmitted = false;
    }

    loadQuiz(quizData) {
        // Hỗ trợ cả object (1 câu) và array (nhiều câu)
        this.questions = Array.isArray(quizData) ? quizData : [quizData];
        this.selections = {};
        this.isSubmitted = false;
        
        // Reset UI
        this.listContainer.innerHTML = '';
        this.resultContainer.className = 'quiz-result mt-3';
        this.resultContainer.textContent = '';
        this.resultContainer.style.display = 'none';
        
        // Render questions
        this.renderQuestions();
    }

    renderQuestions() {
        const letters = ['A', 'B', 'C', 'D'];
        
        this.questions.forEach((q, qIndex) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'quiz-item';
            itemDiv.id = `question-${qIndex}`;
            
            // Question Title
            const title = document.createElement('h3');
            title.textContent = `Câu ${qIndex + 1}: ${q.question}`;
            itemDiv.appendChild(title);
            
            // Options Container
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'quiz-options';
            
            q.options.forEach((option, oIndex) => {
                const optDiv = document.createElement('div');
                optDiv.className = 'quiz-option';
                optDiv.dataset.questionIndex = qIndex;
                optDiv.dataset.optionId = option.id;
                
                optDiv.innerHTML = `
                    <div class="option-letter">${letters[oIndex]}</div>
                    <div class="option-text">${option.text}</div>
                `;
                
                optDiv.addEventListener('click', () => this.selectOption(qIndex, option.id));
                optionsDiv.appendChild(optDiv);
            });
            itemDiv.appendChild(optionsDiv);
            
            // Explanation Container
            const expDiv = document.createElement('div');
            expDiv.className = 'quiz-explanation';
            expDiv.id = `explanation-${qIndex}`;
            expDiv.innerHTML = `<strong><i class="fa-solid fa-lightbulb"></i> Giải thích đáp án:</strong> ${q.explanation || 'Không có giải thích chi tiết cho câu hỏi này.'}`;
            itemDiv.appendChild(expDiv);
            
            this.listContainer.appendChild(itemDiv);
        });
    }

    selectOption(qIndex, optionId) {
        // Nếu câu hỏi này đã được trả lời rồi thì không cho chọn lại
        if (this.selections[qIndex] !== undefined) return;
        
        this.selections[qIndex] = optionId;
        const q = this.questions[qIndex];
        const isCorrect = optionId === q.correctAnswer;
        
        const questionDiv = document.getElementById(`question-${qIndex}`);
        const options = questionDiv.querySelectorAll('.quiz-option');
        const expDiv = document.getElementById(`explanation-${qIndex}`);
        
        // Update styling
        options.forEach(opt => {
            if (opt.dataset.optionId === q.correctAnswer) {
                opt.classList.add('correct');
            } else if (opt.dataset.optionId === optionId && !isCorrect) {
                opt.classList.add('wrong');
                opt.classList.add('selected'); // Highlight the wrong choice
            }
        });
        
        // Hiện giải thích nếu làm sai
        if (!isCorrect) {
            expDiv.classList.add('show');
        }
        
        this.checkAllCompleted();
    }

    checkAllCompleted() {
        const total = this.questions.length;
        const answeredCount = Object.keys(this.selections).length;
        
        if (answeredCount === total) {
            this.isSubmitted = true;
            
            let correctCount = 0;
            this.questions.forEach((q, idx) => {
                if (this.selections[idx] === q.correctAnswer) correctCount++;
            });
            
            this.resultContainer.style.display = 'block';
            if (correctCount === total) {
                this.resultContainer.className = 'quiz-result success mt-3';
                this.resultContainer.innerHTML = `<i class="fa-solid fa-circle-check"></i> Tuyệt vời! Bạn đã trả lời đúng toàn bộ ${correctCount}/${total} câu.`;
            } else {
                this.resultContainer.className = 'quiz-result error mt-3';
                this.resultContainer.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Bạn đã trả lời đúng ${correctCount}/${total} câu. Hãy đọc kỹ phần giải thích của các câu sai nhé!`;
            }
            
            // Mark lesson complete
            document.dispatchEvent(new CustomEvent('lessonCompleted'));
        }
    }
}
