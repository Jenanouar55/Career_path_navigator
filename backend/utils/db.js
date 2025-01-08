import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URI);

export default {
  dbClient: client,
};