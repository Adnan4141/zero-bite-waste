const express = require('express');
const router = express.Router();
const auth = require('../middleware/authmiddleware');
const { createDonation, getAllDonations } = require('../controllers/dontaController');

router.post('/',createDonation);
router.get('/', getAllDonations);

module.exports = router;
