const express = require('express');
const router = express.Router();
const IndustryInsight = require('../models/IndustryInsight');

// Get all insights
router.get('/', async (req, res) => {
  try {
    const insights = await IndustryInsight.find();
    res.status(200).json(insights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single insight by ID
router.get('/:id', async (req, res) => {
  try {
    const insight = await IndustryInsight.findById(req.params.id);
    if (!insight) return res.status(404).json({ message: 'Insight not found' });
    res.status(200).json(insight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new insight
router.post('/', async (req, res) => {
  const insight = new IndustryInsight(req.body);
  try {
    const newInsight = await insight.save();
    res.status(201).json(newInsight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an insight
router.put('/:id', async (req, res) => {
  try {
    const updatedInsight = await IndustryInsight.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedInsight) return res.status(404).json({ message: 'Insight not found' });
    res.status(200).json(updatedInsight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an insight
router.delete('/:id', async (req, res) => {
  try {
    const insight = await IndustryInsight.findByIdAndDelete(req.params.id);
    if (!insight) return res.status(404).json({ message: 'Insight not found' });
    res.status(200).json({ message: 'Insight deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
