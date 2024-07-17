import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  team_name: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Team = mongoose.model('Team', teamSchema);

