const { findUserByEmail, StorageConfigError } = require('../../lib/auth-store');
const { createAuthToken, getSafeUser, normalizeEmail, verifyPassword } = require('../../lib/auth-utils');
const { readJsonBody } = require('../../lib/request-utils');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { email, password } = await readJsonBody(req);
        const normalizedEmail = normalizeEmail(email);
        const normalizedPassword = String(password || '');

        if (!normalizedEmail || !normalizedPassword) {
            return res.status(400).json({ error: 'Email và mật khẩu là bắt buộc' });
        }

        const user = await findUserByEmail(normalizedEmail);
        if (!user || !verifyPassword(normalizedPassword, user.passwordHash)) {
            return res.status(401).json({ error: 'Thông tin đăng nhập không đúng' });
        }

        const safeUser = getSafeUser(user);
        return res.status(200).json({
            message: 'Đăng nhập thành công',
            token: createAuthToken(safeUser),
            user: safeUser
        });
    } catch (error) {
        console.error('Login API error:', error);

        if (error instanceof StorageConfigError) {
            return res.status(500).json({ error: error.message });
        }

        if (error instanceof SyntaxError) {
            return res.status(400).json({ error: 'Dữ liệu gửi lên không hợp lệ' });
        }

        return res.status(500).json({ error: 'Không thể đăng nhập' });
    }
};