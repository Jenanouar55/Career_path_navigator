const express = require('express');
const router = express.Router();
const Mentorship = require('../models/Mentorship'); // Adjust the path if needed

// Get all mentorship opportunities
router.get('/', async (req, res) => {
  try {
    const mentorships = await Mentorship.find();
    res.status(200).json(mentorships);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single mentorship opportunity by ID
router.get('/:id', async (req, res) => {
  try {
    const mentorship = await Mentorship.findById(req.params.id);
    if (!mentorship) return res.status(404).json({ message: 'Mentorship not found' });
    res.status(200).json(mentorship);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new mentorship opportunity
router.post('/', async (req, res) => {
  const mentorship = new Mentorship(req.body);
  try {
    const newMentorship = await mentorship.save();
    res.status(201).json(newMentorship);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a mentorship opportunity
router.put('/:id', async (req, res) => {
  try {
    const updatedMentorship = await Mentorship.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMentorship) return res.status(404).json({ message: 'Mentorship not found' });
    res.status(200).json(updatedMentorship);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a mentorship opportunity
router.delete('/:id', async (req, res) => {
  try {
    const mentorship = await Mentorship.findByIdAndDelete(req.params.id);
    if (!mentorship) return res.status(404).json({ message: 'Mentorship not found' });
    res.status(200).json({ message: 'Mentorship deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
