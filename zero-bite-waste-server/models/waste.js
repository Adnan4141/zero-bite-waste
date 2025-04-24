const mongoose = require('mongoose');

const wasteSchema = new mongoose.Schema({
  foodItem: { type: String, required: true },
  quantity: { type: Number, required: true },
  status:   { type: String, enum: ['available', 'donated'], default: 'available' },
  addedBy:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date:     { type: Date, default: Date.now }
});

module.exports = mongoose.model('Waste', wasteSchema);
