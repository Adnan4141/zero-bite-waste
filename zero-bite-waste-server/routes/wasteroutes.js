const express = require('express');
const router = express.Router();
const auth = require('../middleware/authmiddleware');
const { addWaste, getWaste } = require('../controllers/wastecontroller');

router.post('/', auth, addWaste);
router.get('/', getWaste);

module.exports = router;
