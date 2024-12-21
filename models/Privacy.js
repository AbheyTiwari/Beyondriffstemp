const mongoose = require('mongoose');

const PrivacySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  usernameVisibility: { type: Boolean, default: true },
  emailUsage: { type: Boolean, default: false },
  phoneFindability: { type: Boolean, default: true },
  privateMessaging: { type: Boolean, default: false },
});

module.exports = mongoose.model('Privacy', PrivacySchema);
