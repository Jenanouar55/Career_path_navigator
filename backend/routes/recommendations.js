const express = require('express');
const router = express.Router();
const { getRecommendations } = require('../utils/recommendationEngine');

// Get personalized recommendations for a user
router.get('/:userId', async (req, res) => {
  try {
    const recommendations = await getRecommendations(req.params.userId);
    res.status(200).json(recommendations);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
