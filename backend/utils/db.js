import dotenv from 'dotenv';
dotenv.config();  // Load environment variables from .env file

import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URI);

export default {
  dbClient: client,
};