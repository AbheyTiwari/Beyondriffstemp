const Privacy = require('../models/Privacy');

// Get Privacy Settings
const getPrivacySettings = async (req, res) => {
  try {
    const settings = await Privacy.findOne({ userId: req.user._id });
    if (!settings) {
      return res.status(404).json({ message: 'Privacy settings not found' });
    }
    res.json(settings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Privacy Settings
const updatePrivacySettings = async (req, res) => {
  try {
    const { usernameVisibility, emailUsage, phoneFindability, privateMessaging } = req.body;
    const settings = await Privacy.findOneAndUpdate(
      { userId: req.user._id },
      { usernameVisibility, emailUsage, phoneFindability, privateMessaging },
      { new: true, upsert: true } // Upsert: Create a new document if not found
    );
    res.json({ message: 'Privacy settings updated successfully', settings });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getPrivacySettings, updatePrivacySettings };
