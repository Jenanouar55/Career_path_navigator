import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import bodyParser from 'body-parser';
import cors from 'cors';

// Initialize App
const app = express();
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log(process.env.MONGO_URI); // Check if it's logging the correct Mongo URI



// require('dotenv').config();
// import dotenv from 'dotenv';
// import router from './router/index.js';
// const express = require("express");
// const connectDB = require("./config/db");
// const authRoutes = require("./routes/auth");
// const bodyParser = require("body-parser");
// const cors = require("cors");

