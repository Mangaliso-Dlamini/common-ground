import mongoose from 'mongoose';
const { Schema } = mongoose;

const matchSchema = new Schema({
  match_id: { type: Number, unique: true, autoIncrement: true },
  home_team_id: { type: Schema.Types.ObjectId, ref: 'Team' },
  away_team_id: { type: Schema.Types.ObjectId, ref: 'Team' },
  league_id: { type: Schema.Types.ObjectId, ref: 'League' },
  match_date: { type: Date, required: true },
  match_time: { type: String, required: true },
  home_team_score: { type: Number, default: 0 },
  away_team_score: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Match = mongoose.model('Match', matchSchema);
