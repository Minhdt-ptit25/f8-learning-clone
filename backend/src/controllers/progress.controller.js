const fs = require('fs').promises;
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');

async function readUsers() {
    try {
        const data = await fs.readFile(usersFilePath, 'utf8');
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

async function writeUsers(users) {
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 4));
}

const getProgress = async (req, res) => {
    try {
        const users = await readUsers();
        const user = users.find(u => u.id === req.userId);
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });

        res.json({ success: true, progress: user.progress || [] });
    } catch (e) {
        res.status(500).json({ success: false, message: 'Lỗi server' });
    }
};

const markComplete = async (req, res) => {
    try {
        const { lessonId } = req.body;
        if (!lessonId) return res.status(400).json({ success: false, message: 'lessonId is required' });

        const users = await readUsers();
        const userIndex = users.findIndex(u => u.id === req.userId);
        
        if (userIndex === -1) return res.status(404).json({ success: false, message: 'User not found' });

        const user = users[userIndex];
        if (!user.progress) user.progress = [];

        // Tránh trùng lặp
        if (!user.progress.includes(lessonId)) {
            user.progress.push(lessonId);
            await writeUsers(users);
        }

        res.json({ success: true, progress: user.progress });
    } catch (e) {
        res.status(500).json({ success: false, message: 'Lỗi server' });
    }
};

module.exports = { getProgress, markComplete };
