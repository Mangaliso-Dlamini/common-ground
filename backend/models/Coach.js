import mongoose from 'mongoose';
const { Schema } = mongoose;

const coachSchema = new Schema({
  //coach_id: {type: Number, required: true, unique: true, autoIncrement: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  team_id: {
    type: Schema.Types.ObjectId, ref: 'Team', default: null },
  created_at: { type: Date, default: Date.now  },
  updated_at: { type: Date, default: Date.now }
});

export const Coach = mongoose.model('Coach', coachSchema);
