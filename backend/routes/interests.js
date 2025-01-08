const express = require('express');
const router = express.Router();
const Interest = require('../models/Interest');

// Save user interests
router.post('/', async (req, res) => {
  const { userId, interests } = req.body;
  const newInterest = new Interest({ userId, interests });

  try {
    const savedInterest = await newInterest.save();
    res.status(201).json(savedInterest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get user interests by userId
router.get('/:userId', async (req, res) => {
  try {
    const interests = await Interest.findOne({ userId: req.params.userId });
    if (!interests) return res.status(404).json({ message: 'No interests found for this user' });
    res.status(200).json(interests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update user interests
router.put('/:userId', async (req, res) => {
  try {
    const updatedInterest = await Interest.findOneAndUpdate(
      { userId: req.params.userId },
      { interests: req.body.interests },
      { new: true }
    );
    if (!updatedInterest) return res.status(404).json({ message: 'No interests found for this user' });
    res.status(200).json(updatedInterest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete user interests
router.delete('/:userId', async (req, res) => {
  try {
    const deletedInterest = await Interest.findOneAndDelete({ userId: req.params.userId });
    if (!deletedInterest) return res.status(404).json({ message: 'No interests found for this user' });
    res.status(200).json({ message: 'Interests deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
