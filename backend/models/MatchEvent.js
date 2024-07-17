import mongoose from 'mongoose';
const { Schema } = mongoose;

const matchEventSchema = new Schema({
  event_id: { type: Number, unique: true, autoIncrement: true },
  match_id: { type: Schema.Types.ObjectId, ref: 'Match', required: true },
  player_id: { type: Schema.Types.ObjectId, ref: 'Player', required: true },
  event_type: { type: String, required: true, maxlength: 50 },
  event_time: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const MatchEvent = mongoose.model('MatchEvent', matchEventSchema);

