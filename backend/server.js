const express = require('express');
const cors = require('cors');
const coursesData = require('./data');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Cho phép Frontend gọi API từ port khác
app.use(express.json());

// RESTful APIs

// 1. Lấy danh sách các khóa học (chỉ lấy metadata, không lấy toàn bộ lessons)
app.get('/api/courses', (req, res) => {
    const courseList = Object.keys(coursesData).map(key => ({
        id: key,
        title: coursesData[key].title
    }));
    res.json(courseList);
});

// 2. Các API lấy dữ liệu chi tiết từng khóa học (chapters, lessons)

// API Khóa học JS Cơ Bản
app.get('/api/courses/js-basic', (req, res) => {
    res.json(coursesData['js-basic']);
});

// API Khóa học JS Nâng Cao
app.get('/api/courses/js-advanced', (req, res) => {
    res.json(coursesData['js-advanced']);
});

// API Khóa học NodeJS
app.get('/api/courses/nodejs', (req, res) => {
    res.json(coursesData['nodejs']);
});

// Khởi chạy server
app.listen(PORT, () => {
    console.log(`🚀 Backend Server đang chạy tại http://localhost:${PORT}`);
});
