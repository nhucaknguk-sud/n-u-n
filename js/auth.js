class AuthManager {
    constructor() {
        this.tokenStorageKey = 'nauan_auth_token';
        this.userStorageKey = 'nauan_auth_user';
        this.authToken = localStorage.getItem(this.tokenStorageKey) || '';
        this.currentUser = this.loadStoredUser();
        this.apiBaseUrl = this.getApiBaseUrl();
    }

    getApiBaseUrl() {
        if (typeof window === 'undefined') {
            return '/api/auth';
        }

        const { hostname, origin, port, protocol } = window.location;
        if (port === '3000') {
            return `${origin}/api/auth`;
        }

        if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('.test') || hostname.endsWith('.local')) {
            return `${protocol}//${hostname}:3000/api/auth`;
        }

        if (!port || port === '80' || port === '443') {
            return `http://${hostname}:3000/api/auth`;
        }

        return `${origin}/api/auth`;
    }

    loadStoredUser() {
        try {
            const raw = localStorage.getItem(this.userStorageKey);
            return raw ? JSON.parse(raw) : null;
        } catch {
            return null;
        }
    }

    saveSession(token, user) {
        this.authToken = token;
        this.currentUser = user;
        localStorage.setItem(this.tokenStorageKey, token);
        localStorage.setItem(this.userStorageKey, JSON.stringify(user));
        this.renderAuthControls();
        this.dispatchAuthChange();
    }

    clearSession() {
        this.authToken = '';
        this.currentUser = null;
        localStorage.removeItem(this.tokenStorageKey);
        localStorage.removeItem(this.userStorageKey);
        this.renderAuthControls();
        this.dispatchAuthChange();
    }

    isLoggedIn() {
        return Boolean(this.authToken && this.currentUser?.id);
    }

    getCurrentUser() {
        return this.currentUser;
    }

    getCurrentUserId() {
        return this.currentUser?.id || '';
    }

    getAuthHeaders() {
        return this.authToken ? { Authorization: `Bearer ${this.authToken}` } : {};
    }

    dispatchAuthChange() {
        window.dispatchEvent(new CustomEvent('authchange', {
            detail: {
                isLoggedIn: this.isLoggedIn(),
                user: this.currentUser
            }
        }));
    }

    async request(path, options = {}) {
        const response = await fetch(`${this.apiBaseUrl}${path}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...this.getAuthHeaders(),
                ...(options.headers || {})
            }
        });

        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
            throw new Error(data.error || 'Yêu cầu thất bại');
        }

        return data;
    }

    async register(payload) {
        const data = await this.request('/register', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
        this.saveSession(data.token, data.user);
        return data;
    }

    async login(payload) {
        const data = await this.request('/login', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
        this.saveSession(data.token, data.user);
        return data;
    }

    async restoreSession() {
        if (!this.authToken) {
            this.renderAuthControls();
            return;
        }

        try {
            const data = await this.request('/me', { method: 'GET' });
            this.currentUser = data.user;
            localStorage.setItem(this.userStorageKey, JSON.stringify(data.user));
            this.renderAuthControls();
            this.dispatchAuthChange();
        } catch {
            this.clearSession();
        }
    }

    async logout() {
        try {
            if (this.authToken) {
                await this.request('/logout', { method: 'POST' });
            }
        } catch (error) {
            console.warn('Logout request failed:', error);
        } finally {
            this.clearSession();
        }
    }

    renderAuthControls() {
        const container = document.getElementById('authControls');
        if (!container) {
            return;
        }

        if (!this.isLoggedIn()) {
            container.innerHTML = `
                <button class="nav-auth-btn nav-auth-btn-secondary" type="button" data-auth-open="login">Đăng nhập</button>
                <button class="nav-auth-btn nav-auth-btn-primary" type="button" data-auth-open="register">Tạo tài khoản</button>
            `;
            this.bindOpenButtons();
            return;
        }

        const user = this.getCurrentUser();
        container.innerHTML = `
            <div class="auth-user-card">
                <div class="auth-user-copy">
                    <span class="auth-user-name">${this.escapeHtml(user.name || 'Tài khoản')}</span>
                    <small class="auth-user-email">${this.escapeHtml(user.email || '')}</small>
                </div>
                <button class="nav-auth-btn nav-auth-btn-secondary" type="button" id="logoutButton">Đăng xuất</button>
            </div>
        `;

        const logoutButton = document.getElementById('logoutButton');
        if (logoutButton) {
            logoutButton.addEventListener('click', async () => {
                await this.logout();
                if (typeof showToast === 'function') {
                    showToast('Đã đăng xuất khỏi tài khoản', 'info');
                }
            });
        }
    }

    bindOpenButtons() {
        document.querySelectorAll('[data-auth-open]').forEach(button => {
            button.addEventListener('click', () => {
                const mode = button.getAttribute('data-auth-open') || 'login';
                this.openModal(mode);
            });
        });
    }

    bindModal() {
        document.querySelectorAll('[data-auth-tab]').forEach(button => {
            button.addEventListener('click', () => {
                this.switchTab(button.getAttribute('data-auth-tab') || 'login');
            });
        });

        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');

        if (loginForm) {
            loginForm.addEventListener('submit', async event => {
                event.preventDefault();
                const formData = new FormData(loginForm);

                try {
                    this.setFeedback('');
                    this.setFormLoading(loginForm, true);
                    await this.login({
                        email: String(formData.get('email') || '').trim(),
                        password: String(formData.get('password') || '')
                    });
                    this.setFeedback('Đăng nhập thành công.', 'success');
                    if (typeof showToast === 'function') {
                        showToast('Đăng nhập thành công', 'success');
                    }
                    loginForm.reset();
                    closeAuthModal();
                } catch (error) {
                    this.setFeedback(error.message || 'Không thể đăng nhập', 'error');
                } finally {
                    this.setFormLoading(loginForm, false);
                }
            });
        }

        if (registerForm) {
            registerForm.addEventListener('submit', async event => {
                event.preventDefault();
                const formData = new FormData(registerForm);

                try {
                    this.setFeedback('');
                    this.setFormLoading(registerForm, true);
                    await this.register({
                        name: String(formData.get('name') || '').trim(),
                        email: String(formData.get('email') || '').trim(),
                        password: String(formData.get('password') || '')
                    });
                    this.setFeedback('Tạo tài khoản thành công.', 'success');
                    if (typeof showToast === 'function') {
                        showToast('Tài khoản đã được tạo', 'success');
                    }
                    registerForm.reset();
                    closeAuthModal();
                } catch (error) {
                    this.setFeedback(error.message || 'Không thể tạo tài khoản', 'error');
                } finally {
                    this.setFormLoading(registerForm, false);
                }
            });
        }
    }

    setFormLoading(form, isLoading) {
        form.querySelectorAll('input, button').forEach(element => {
            element.disabled = isLoading;
        });
    }

    switchTab(mode) {
        const title = document.getElementById('authModalTitle');
        const description = document.getElementById('authModalDescription');
        const tabs = document.querySelectorAll('.auth-tab');
        const forms = document.querySelectorAll('.auth-form');

        tabs.forEach(tab => {
            tab.classList.toggle('active', tab.getAttribute('data-auth-tab') === mode);
        });

        forms.forEach(form => {
            const shouldShow = form.id === `${mode}Form`;
            form.classList.toggle('active', shouldShow);
        });

        if (title && description) {
            if (mode === 'register') {
                title.textContent = 'Tạo tài khoản mới';
                description.textContent = 'Đăng ký để lưu công thức yêu thích và danh sách món ăn của bạn.';
            } else {
                title.textContent = 'Đăng nhập để lưu món yêu thích';
                description.textContent = 'Quay lại tài khoản của bạn để tiếp tục lưu và quản lý món ăn.';
            }
        }

        this.setFeedback('');
    }

    openModal(mode = 'login') {
        const modal = document.getElementById('authModal');
        if (!modal) {
            return;
        }

        this.switchTab(mode);
        modal.style.display = 'block';
    }

    closeModal() {
        const modal = document.getElementById('authModal');
        if (!modal) {
            return;
        }

        modal.style.display = 'none';
        this.setFeedback('');
    }

    setFeedback(message, type = '') {
        const feedback = document.getElementById('authFeedback');
        if (!feedback) {
            return;
        }

        feedback.className = `auth-feedback${type ? ` auth-feedback-${type}` : ''}`;
        feedback.textContent = message;
        feedback.style.display = message ? 'block' : 'none';
    }

    ensureAuthenticated(message = 'Vui lòng đăng nhập để tiếp tục') {
        if (this.isLoggedIn()) {
            return true;
        }

        if (typeof showToast === 'function') {
            showToast(message, 'info');
        }
        this.openModal('login');
        return false;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = String(text || '');
        return div.innerHTML;
    }

    init() {
        this.renderAuthControls();
        this.bindOpenButtons();
        this.bindModal();
        this.restoreSession();
    }
}

const authManager = new AuthManager();
window.authManager = authManager;

function openAuthModal(mode = 'login') {
    authManager.openModal(mode);
}

function closeAuthModal() {
    authManager.closeModal();
}

document.addEventListener('DOMContentLoaded', () => {
    authManager.init();
});

window.addEventListener('click', event => {
    const authModal = document.getElementById('authModal');
    if (event.target === authModal) {
        closeAuthModal();
    }
});