const express = require('express');
const { createMessage, getMessages } = require('../controllers/contactController');
const router = express.Router();

// POST /api/contact
router.post('/', createMessage);

// (Optional) 
router.get('/', getMessages);

module.exports = router;