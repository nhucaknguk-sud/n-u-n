const { findUserById, StorageConfigError } = require('../../lib/auth-store');
const { getBearerToken, getSafeUser, verifyAuthToken } = require('../../lib/auth-utils');

module.exports = async (req, res) => {
    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const token = getBearerToken(req);
        const payload = verifyAuthToken(token);

        if (!payload?.sub) {
            return res.status(401).json({ error: 'Phiên đăng nhập không hợp lệ' });
        }

        const user = await findUserById(payload.sub);
        if (!user) {
            return res.status(401).json({ error: 'Người dùng không tồn tại' });
        }

        return res.status(200).json({ user: getSafeUser(user) });
    } catch (error) {
        console.error('Get current user API error:', error);

        if (error instanceof StorageConfigError) {
            return res.status(500).json({ error: error.message });
        }

        return res.status(500).json({ error: 'Không thể lấy thông tin người dùng' });
    }
};