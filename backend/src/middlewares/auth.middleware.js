const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'f8_secret_key_123';

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(403).json({ success: false, message: 'Vui lòng đăng nhập để lưu tiến trình' });

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(403).json({ success: false, message: 'Token không hợp lệ' });

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json({ success: false, message: 'Phiên đăng nhập đã hết hạn' });
        req.userId = decoded.id;
        next();
    });
};

module.exports = { verifyToken };
