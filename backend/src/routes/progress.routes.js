const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progress.controller');
const { verifyToken } = require('../middlewares/auth.middleware');

// Cần đăng nhập mới gọi được các API này
router.use(verifyToken);

router.get('/', progressController.getProgress);
router.post('/complete', progressController.markComplete);

module.exports = router;
