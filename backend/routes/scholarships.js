const express = require('express');
const router = express.Router();
const Scholarship = require('../models/Scholarship');

// Get all scholarships
router.get('/', async (req, res) => {
  try {
    const scholarships = await Scholarship.find();
    res.status(200).json(scholarships);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single scholarship by ID
router.get('/:id', async (req, res) => {
  try {
    const scholarship = await Scholarship.findById(req.params.id);
    if (!scholarship) return res.status(404).json({ message: 'Scholarship not found' });
    res.status(200).json(scholarship);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new scholarship
router.post('/', async (req, res) => {
  const scholarship = new Scholarship(req.body);
  try {
    const newScholarship = await scholarship.save();
    res.status(201).json(newScholarship);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a scholarship
router.put('/:id', async (req, res) => {
  try {
    const updatedScholarship = await Scholarship.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedScholarship) return res.status(404).json({ message: 'Scholarship not found' });
    res.status(200).json(updatedScholarship);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a scholarship
router.delete('/:id', async (req, res) => {
  try {
    const scholarship = await Scholarship.findByIdAndDelete(req.params.id);
    if (!scholarship) return res.status(404).json({ message: 'Scholarship not found' });
    res.status(200).json({ message: 'Scholarship deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
