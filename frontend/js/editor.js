class CodeEditor {
    constructor(textareaId, outputContainerId) {
        this.textarea = document.getElementById(textareaId);
        this.outputContainer = document.getElementById(outputContainerId);
        
        // Initialize CodeMirror
        this.editor = CodeMirror.fromTextArea(this.textarea, {
            mode: 'javascript',
            theme: 'dracula',
            lineNumbers: true,
            autoCloseBrackets: true,
            matchBrackets: true,
            indentUnit: 4,
            tabSize: 4
        });
        
        this.setupConsoleInterceptor();
    }

    // Set code in editor
    setCode(code) {
        this.editor.setValue(code);
        // Refresh to ensure CodeMirror renders correctly if hidden initially
        setTimeout(() => this.editor.refresh(), 10);
    }

    // Get code from editor
    getCode() {
        return this.editor.getValue();
    }

    // Clear output console
    clearOutput() {
        this.outputContainer.innerHTML = '';
    }

    // Append output message
    appendOutput(message, type = 'log') {
        const div = document.createElement('div');
        div.className = type;
        
        // Format object/array properly
        if (typeof message === 'object') {
            div.textContent = JSON.stringify(message, null, 2);
        } else {
            div.textContent = String(message);
        }
        
        this.outputContainer.appendChild(div);
        this.outputContainer.scrollTop = this.outputContainer.scrollHeight;
    }

    // Intercept console.log, console.error, console.warn for eval
    setupConsoleInterceptor() {
        const originalLog = console.log;
        const originalError = console.error;
        const originalWarn = console.warn;
        
        // This is a simple interceptor. In a real app, we might use iframe for better isolation
        window.customConsole = {
            log: (...args) => {
                const msg = args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ');
                this.appendOutput(msg, 'log');
                originalLog.apply(console, args);
            },
            error: (...args) => {
                const msg = args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ');
                this.appendOutput(msg, 'error');
                originalError.apply(console, args);
            },
            warn: (...args) => {
                const msg = args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ');
                this.appendOutput(msg, 'warn');
                originalWarn.apply(console, args);
            }
        };
    }

    // Run the code
    runCode() {
        this.clearOutput();
        const code = this.getCode();
        
        try {
            // Replace console calls with our custom console
            let execCode = code
                .replace(/console\.log/g, 'window.customConsole.log')
                .replace(/console\.error/g, 'window.customConsole.error')
                .replace(/console\.warn/g, 'window.customConsole.warn');
            
            // Execute code
            // Note: Using new Function is safer than eval, but still has risks in production.
            // For a learning app like this, it's acceptable. An iframe is better for production.
            const executor = new Function(execCode);
            executor();
        } catch (error) {
            this.appendOutput(error.toString(), 'error');
        }
    }
}
