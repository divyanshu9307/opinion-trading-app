import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookMakersSchema = new Schema({
  bookMakerTitle: {
    type: String,
    required: true,
  }, // Sport identifier
  lastUpdated: {
    type: Date,
    required: true,
  }, // Match start time
  homeOdds: {
    type: Number,
    required: true,
  }, // Odds for home team
  awayOdds: {
    type: Number,
    required: true,
  }, // Odds for away team
});

export default bookMakersSchema;
