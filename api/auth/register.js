const { createUser, findUserByEmail, StorageConfigError } = require('../../lib/auth-store');
const { createAuthToken, createUserRecord, getSafeUser, normalizeEmail } = require('../../lib/auth-utils');
const { readJsonBody } = require('../../lib/request-utils');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, password } = await readJsonBody(req);
        const normalizedName = String(name || '').trim();
        const normalizedEmail = normalizeEmail(email);
        const normalizedPassword = String(password || '');

        if (normalizedName.length < 2) {
            return res.status(400).json({ error: 'Tên phải có ít nhất 2 ký tự' });
        }

        if (!normalizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
            return res.status(400).json({ error: 'Email không hợp lệ' });
        }

        if (normalizedPassword.length < 6) {
            return res.status(400).json({ error: 'Mật khẩu phải có ít nhất 6 ký tự' });
        }

        const existingUser = await findUserByEmail(normalizedEmail);
        if (existingUser) {
            return res.status(409).json({ error: 'Email đã được sử dụng' });
        }

        const user = createUserRecord({
            name: normalizedName,
            email: normalizedEmail,
            password: normalizedPassword
        });

        await createUser(user);

        const safeUser = getSafeUser(user);
        return res.status(201).json({
            message: 'Tạo tài khoản thành công',
            token: createAuthToken(safeUser),
            user: safeUser
        });
    } catch (error) {
        console.error('Register API error:', error);

        if (error instanceof StorageConfigError) {
            return res.status(500).json({ error: error.message });
        }

        if (error instanceof SyntaxError) {
            return res.status(400).json({ error: 'Dữ liệu gửi lên không hợp lệ' });
        }

        return res.status(500).json({ error: 'Không thể tạo tài khoản' });
    }
};