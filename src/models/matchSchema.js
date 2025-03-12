import mongoose from 'mongoose';
import bookMakersSchema from './common/bookMakersSchema';
const { Schema } = mongoose;

const matchSchema = new Schema({
  matchId: {
    type: String,
    required: true,
    unique: true,
  },
  sportCategory: {
    type: String,
    required: true,
  }, // Sport identifier
  sportTitle: {
    type: String,
    required: true,
  }, // Sport name
  startTime: {
    type: Date,
    required: true,
  }, // Match start time
  homeTeam: {
    type: String,
    required: true,
  }, // Home team name
  awayTeam: {
    type: String,
    required: true,
  }, // Away team name
  isCompleted: {
    type: Boolean,
    default: false,
  },
  bookMakers: [bookMakersSchema],
});
