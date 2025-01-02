const mongoose = require('mongoose');

const MentorshipSchema = new mongoose.Schema({
  mentorName: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true }, // e.g., years of experience
  availability: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Mentorship', MentorshipSchema);
