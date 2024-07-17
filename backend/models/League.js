import mongoose from 'mongoose';
const { Schema } = mongoose;

const leagueSchema = new Schema({
  league_id: { type: Number, unique: true, autoIncrement: true },
  league_name: { type: String, required: true, maxlength: 100 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const League = mongoose.model('League', leagueSchema);
