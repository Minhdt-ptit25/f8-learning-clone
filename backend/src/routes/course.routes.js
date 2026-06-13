const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');

// Lấy danh sách các khóa học (metadata)
router.get('/', courseController.getCourseList);

// Lấy chi tiết khóa học theo ID
router.get('/:id', courseController.getCourseById);

module.exports = router;
