const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
import router from './router/index';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('connected', () => console.log('MongoDB connected'));
db.on('error', (err) => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => res.send('API is running...'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
