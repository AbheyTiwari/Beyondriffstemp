const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/authenticate');
const { getPrivacySettings, updatePrivacySettings } = require('../controllers/privacyController');

// Route to get privacy settings
router.get('/', authenticate, getPrivacySettings);

// Route to update privacy settings
router.put('/', authenticate, updatePrivacySettings);

module.exports = router;
