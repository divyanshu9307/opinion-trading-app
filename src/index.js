import express from 'express';
import mongoose from 'mongoose';
import logger from './logger.js';
import 'dotenv/config';
import { fetchLiveData } from './services/service.js';

const app = express();
const port = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info(`DB connection established with ${MONGODB_URI}`);
  } catch (error) {
    process.exit(1);
  }
};

app.get('/', (req, res) => {
  res.send('opinion trading app');
  fetchLiveData();
//   fetchFinalScores();
});

await connectDB();

app.listen(port, () => {
  logger.info(`Server started, listening on port ${port}`);
});
