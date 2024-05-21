import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['done', 'not done', 'None'],default: 'None' },
  date: {
    type: Date,
    default: Date.now
  }
});

export const HabitModel = mongoose.model('Habit', habitSchema);