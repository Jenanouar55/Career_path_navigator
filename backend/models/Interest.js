const mongoose = require('mongoose');

const InterestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  interests: { type: [String], required: true }, // Array of interests, e.g., ['AI', 'Web Development']
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Interest', InterestSchema);
