import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
  role_name: { type: String, required: true, unique: true }
});

export const Role = mongoose.model('Role', roleSchema);

