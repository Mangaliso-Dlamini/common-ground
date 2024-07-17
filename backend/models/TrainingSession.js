import mongoose from 'mongoose';
const { Schema } = mongoose;

const trainingSessionSchema = new Schema({
  session_id: { type: Number, unique: true, autoIncrement: true },
  team_id: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
  facility_id: { type: Schema.Types.ObjectId, ref: 'Facility', required: true },
  session_date: { type: Date, required: true },
  session_time: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date,  default: Date.now }
});

export const TrainingSession = mongoose.model('TrainingSession', trainingSessionSchema);
