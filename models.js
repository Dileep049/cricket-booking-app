const mongoose = require('mongoose');

// 1. User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

// 2. Ground Schema
const groundSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  pricePerHour: { type: Number, required: true },
  amenities: [String], // e.g., ['Parking', 'Water', 'Floodlights']
  images: [String]
});

// 3. Booking Schema
const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ground: { type: mongoose.Schema.Types.ObjectId, ref: 'Ground' },
  date: { type: Date, required: true },
  startTime: String, // e.g., "06:00 AM"
  endTime: String,   // e.g., "07:00 AM"
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  paymentId: String
});

module.exports = {
  User: mongoose.model('User', userSchema),
  Ground: mongoose.model('Ground', groundSchema),
  Booking: mongoose.model('Booking', bookingSchema)
};