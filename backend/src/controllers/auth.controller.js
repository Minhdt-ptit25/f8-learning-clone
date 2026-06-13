const fs = require('fs').promises;
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const usersFilePath = path.join(__dirname, '../data/users.json');
const SECRET_KEY = process.env.JWT_SECRET || 'f8_secret_key_123';

// Helper to read users
async function readUsers() {
    try {
        const data = await fs.readFile(usersFilePath, 'utf8');
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

// Helper to write users
async function writeUsers(users) {
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 4));
}

const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({ success: false, message: 'Thiếu tên đăng nhập hoặc mật khẩu' });

        const users = await readUsers();
        if (users.find(u => u.username === username)) {
            return res.status(400).json({ success: false, message: 'Tên đăng nhập đã tồn tại!' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            id: Date.now().toString(),
            username,
            password: hashedPassword,
            progress: []
        };

        users.push(newUser);
        await writeUsers(users);

        res.status(201).json({ success: true, message: 'Đăng ký thành công!' });
    } catch (e) {
        console.error(e);
        res.status(500).json({ success: false, message: 'Lỗi server nội bộ' });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const users = await readUsers();
        const user = users.find(u => u.username === username);

        if (!user) return res.status(404).json({ success: false, message: 'Không tìm thấy tài khoản!' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ success: false, message: 'Mật khẩu không đúng!' });

        const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '24h' });

        res.json({
            success: true,
            message: 'Đăng nhập thành công!',
            token,
            user: { id: user.id, username: user.username, progress: user.progress || [] }
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ success: false, message: 'Lỗi server nội bộ' });
    }
};

const socialLogin = async (req, res) => {
    try {
        const { uid, email, displayName, provider } = req.body;
        if (!uid) return res.status(400).json({ success: false, message: 'Thiếu UID từ Firebase' });

        const users = await readUsers();
        let user = users.find(u => u.id === uid); // Dùng UID của Firebase làm ID

        if (!user) {
            // Tự động đăng ký nếu chưa có
            user = {
                id: uid,
                username: displayName || email || `${provider}_User_${Math.floor(Math.random() * 1000)}`,
                password: 'SOCIAL_LOGIN_NO_PASSWORD',
                progress: []
            };
            users.push(user);
            await writeUsers(users);
        }

        const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '24h' });

        res.json({
            success: true,
            message: `Đăng nhập qua ${provider} thành công!`,
            token,
            user: { id: user.id, username: user.username, progress: user.progress || [] }
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ success: false, message: 'Lỗi server nội bộ' });
    }
};

module.exports = { register, login, socialLogin };
