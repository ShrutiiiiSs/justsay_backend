const express = require('express');
const router = express.Router();
const { askModel } = require('../controllers/assistantController');

router.post('/', askModel);

module.exports = router;
