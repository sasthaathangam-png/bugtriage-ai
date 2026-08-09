const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  severity: { type: String, default: 'Unclassified' },
  category: { type: String, default: 'Unclassified' },
  reasoning: { type: String },
  status: { type: String, default: 'Open' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bug', bugSchema);