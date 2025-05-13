const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  complaint: String,
  isApproved: { type: Boolean, default: false }
});

module.exports = mongoose.model('Patient', patientSchema);