const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? 'http://localhost:3000' 
    : 'https://f8-learning-clone.onrender.com';

let isLoginMode = true;

// UI Elements
const authModal = document.getElementById('authModal');
const showLoginBtn = document.getElementById('showLoginBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const submitAuthBtn = document.getElementById('submitAuthBtn');
const toggleAuthMode = document.getElementById('toggleAuthMode');
const modalTitle = document.getElementById('modalTitle');
const authToggleText = document.getElementById('authToggleText');
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const authError = document.getElementById('authError');

const unauthView = document.getElementById('unauthView');
const authView = document.getElementById('authView');
const userNameDisplay = document.getElementById('userNameDisplay');
const logoutBtn = document.getElementById('logoutBtn');

// Landing Page Elements
const landingPage = document.getElementById('landingPage');
const landingLoginBtn = document.getElementById('landingLoginBtn');
const landingRegisterBtn = document.getElementById('landingRegisterBtn');

// Auth Token management
function getToken() {
    return localStorage.getItem('f8_token');
}

function setToken(token) {
    localStorage.setItem('f8_token', token);
}

function removeToken() {
    localStorage.removeItem('f8_token');
}

function getUser() {
    const userStr = localStorage.getItem('f8_user');
    return userStr ? JSON.parse(userStr) : null;
}

function setUser(user) {
    localStorage.setItem('f8_user', JSON.stringify(user));
}

function removeUser() {
    localStorage.removeItem('f8_user');
}

// UI State Management
function updateUI() {
    const user = getUser();
    if (user && getToken()) {
        if (unauthView) unauthView.style.display = 'none';
        if (authView) authView.style.display = 'flex';
        if (userNameDisplay) userNameDisplay.textContent = user.username;
        
        // Notify app to load progress
        document.dispatchEvent(new CustomEvent('authStateChanged', { detail: { isAuthenticated: true } }));
    } else {
        if (unauthView) unauthView.style.display = 'block';
        if (authView) authView.style.display = 'none';
        if (userNameDisplay) userNameDisplay.textContent = '';
        
        document.dispatchEvent(new CustomEvent('authStateChanged', { detail: { isAuthenticated: false } }));
    }
}

// Event Listeners for UI
if (showLoginBtn) {
    showLoginBtn.addEventListener('click', () => {
        // Chuyển sang trang Đăng nhập
        window.location.href = 'html/login.html?mode=login';
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        removeToken();
        removeUser();
        window.location.href = window.location.pathname.includes('/html/') ? 'landing.html' : 'html/landing.html';
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        // Back to previous page or landing
        window.location.href = 'landing.html';
    });
}

if (toggleAuthMode) {
    toggleAuthMode.addEventListener('click', (e) => {
        e.preventDefault();
        isLoginMode = !isLoginMode;
        updateModalUI();
        
        // Cập nhật URL mà không reload trang
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('mode', isLoginMode ? 'login' : 'register');
        window.history.pushState({}, '', newUrl);
    });
}

function updateModalUI() {
    if (!authError) return;
    
    authError.style.display = 'none';
    usernameInput.value = '';
    passwordInput.value = '';
    
    if (isLoginMode) {
        if (modalTitle) modalTitle.textContent = 'Đăng nhập vào F8';
        if (submitAuthBtn) submitAuthBtn.textContent = 'Đăng nhập';
        if (authToggleText) authToggleText.textContent = 'Bạn chưa có tài khoản? ';
        if (toggleAuthMode) toggleAuthMode.textContent = 'Đăng ký ngay';
    } else {
        if (modalTitle) modalTitle.textContent = 'Đăng ký tài khoản F8';
        if (submitAuthBtn) submitAuthBtn.textContent = 'Đăng ký';
        if (authToggleText) authToggleText.textContent = 'Đã có tài khoản? ';
        if (toggleAuthMode) toggleAuthMode.textContent = 'Đăng nhập';
    }
}

// API Calls
if (submitAuthBtn) {
    submitAuthBtn.addEventListener('click', async () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
        authError.textContent = 'Vui lòng nhập đầy đủ thông tin!';
        authError.style.display = 'block';
        return;
    }

    submitAuthBtn.disabled = true;
    submitAuthBtn.textContent = 'Đang xử lý...';
    authError.style.display = 'none';

    try {
        const endpoint = isLoginMode ? '/api/auth/login' : '/api/auth/register';
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Có lỗi xảy ra');
        }

        if (isLoginMode) {
            // Login success
            setToken(data.token);
            setUser(data.user);
            // Redirect to App
            window.location.href = '../index.html';
        } else {
            // Register success, auto switch to login
            isLoginMode = true;
            updateModalUI();
            authError.textContent = 'Đăng ký thành công! Hãy đăng nhập.';
            authError.style.color = '#4ade80';
            authError.style.display = 'block';
            
            // Reset color back to error red for next time
            setTimeout(() => {
                authError.style.color = '#ff4d4f';
            }, 3000);
        }

    } catch (err) {
        authError.textContent = err.message;
        authError.style.display = 'block';
    } finally {
        submitAuthBtn.disabled = false;
        submitAuthBtn.textContent = isLoginMode ? 'Đăng nhập' : 'Đăng ký';
    }
    });
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    updateUI();
});

// ====== FIREBASE INTEGRATION ======
let firebaseApp;
let firebaseAuth;
let recaptchaVerifier;

async function initFirebase() {
    try {
        const res = await fetch(`${API_URL}/api/config/firebase`);
        const config = await res.json();
        
        // Only initialize if config is valid
        if (config.apiKey) {
            firebaseApp = firebase.initializeApp(config);
            firebaseAuth = firebase.auth();
            
            // Setup Recaptcha for Phone Auth
            recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
                size: 'invisible'
            });
        }
    } catch (e) {
        console.error("Lỗi khởi tạo Firebase:", e);
    }
}

// Call init on load
initFirebase();

const googleLoginBtn = document.getElementById('googleLoginBtn');
const githubLoginBtn = document.getElementById('githubLoginBtn');
const phoneLoginBtn = document.getElementById('phoneLoginBtn');

async function handleSocialLogin(providerName) {
    if (!firebaseAuth) {
        authError.textContent = 'Hệ thống Đăng nhập mạng xã hội chưa được cấu hình (Thiếu API Key)!';
        authError.style.display = 'block';
        return;
    }
    
    authError.style.display = 'none';
    
    try {
        let provider;
        if (providerName === 'google') provider = new firebase.auth.GoogleAuthProvider();
        else if (providerName === 'github') provider = new firebase.auth.GithubAuthProvider();
        
        const result = await firebaseAuth.signInWithPopup(provider);
        const user = result.user;
        
        // Gửi UID xuống Backend để đồng bộ
        await syncSocialLogin(user.uid, user.email, user.displayName, providerName);
        
    } catch (error) {
        authError.textContent = error.message;
        authError.style.display = 'block';
    }
}

async function handlePhoneLogin() {
    if (!firebaseAuth) {
        authError.textContent = 'Hệ thống chưa được cấu hình!';
        authError.style.display = 'block';
        return;
    }
    
    const phoneNumber = prompt('Vui lòng nhập số điện thoại của bạn (VD: +84912345678):');
    if (!phoneNumber) return;
    
    try {
        const confirmationResult = await firebaseAuth.signInWithPhoneNumber(phoneNumber, recaptchaVerifier);
        const code = prompt('Hệ thống đã gửi mã OTP. Vui lòng nhập mã vào đây:');
        
        if (code) {
            const result = await confirmationResult.confirm(code);
            const user = result.user;
            await syncSocialLogin(user.uid, user.phoneNumber, 'User_' + user.phoneNumber, 'phone');
        }
    } catch (error) {
        authError.textContent = 'Lỗi xác thực SĐT: ' + error.message;
        authError.style.display = 'block';
    }
}

async function syncSocialLogin(uid, email, displayName, provider) {
    try {
        const response = await fetch(`${API_URL}/api/auth/social-login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ uid, email, displayName, provider })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message);

        setToken(data.token);
        setUser(data.user);
        // Redirect to main app
        window.location.href = '../index.html';
    } catch (err) {
        if (authError) {
            authError.textContent = err.message;
            authError.style.display = 'block';
        }
    }
}

if (googleLoginBtn) googleLoginBtn.addEventListener('click', () => handleSocialLogin('google'));
if (githubLoginBtn) githubLoginBtn.addEventListener('click', () => handleSocialLogin('github'));
if (phoneLoginBtn) phoneLoginBtn.addEventListener('click', handlePhoneLogin);
