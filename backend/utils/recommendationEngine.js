const Course = require('../models/Course');
const Mentorship = require('../models/Mentorship');
const Scholarship = require('../models/Scholarship');
const IndustryInsight = require('../models/IndustryInsight');
const Interest = require('../models/Interest');

async function getRecommendations(userId) {
  try {
    const userInterests = await Interest.findOne({ userId });
    if (!userInterests) throw new Error('User interests not found');

    const { interests } = userInterests;

    // Find relevant courses
    const courses = await Course.find({ tags: { $in: interests } });

    // Find relevant mentorships
    const mentorships = await Mentorship.find({ specialization: { $in: interests } });

    // Find relevant scholarships
    const scholarships = await Scholarship.find({ eligibilityCriteria: { $regex: interests.join('|'), $options: 'i' } });

    // Find relevant industry insights
    const insights = await IndustryInsight.find({ category: { $in: interests } });

    return {
      courses,
      mentorships,
      scholarships,
      insights,
    };
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = { getRecommendations };
