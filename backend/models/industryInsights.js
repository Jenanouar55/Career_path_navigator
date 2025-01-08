const mongoose = require('mongoose');

const IndustryInsightSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  publishedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('IndustryInsight', IndustryInsightSchema);
