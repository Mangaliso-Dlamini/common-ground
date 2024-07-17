import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  team_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  position: String,
  shirt_number: Number,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Player = mongoose.model('Player', playerSchema);
