import mongoose from 'mongoose';
const { Schema } = mongoose;

const facilitySchema = new Schema({
  facility_id: { type: Number, unique: true, autoIncrement: true },
  facility_name: { type: String, required: true, maxlength: 100 },
  location: { type: String, maxlength: 255 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Facility = mongoose.model('Facility', facilitySchema);
