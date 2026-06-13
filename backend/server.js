require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const courseRoutes = require('./src/routes/course.routes');
const authRoutes = require('./src/routes/auth.routes');
const progressRoutes = require('./src/routes/progress.routes');
const configRoutes = require('./src/routes/config.routes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Cho phép Frontend gọi API từ port khác
app.use(express.json());

// Phục vụ giao diện Frontend (file index.html, css, js)
// Đã cấu trúc lại, frontend nằm ở ../frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// RESTful APIs
app.use('/api/courses', courseRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/config', configRoutes);

// Khởi chạy server
app.listen(PORT, () => {
    console.log(`🚀 Backend Server đang chạy tại http://localhost:${PORT}`);
});
