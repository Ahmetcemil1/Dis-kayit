const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  department: String,
  about: String,
  profilePhoto: String,
  isApproved: { type: Boolean, default: false }
});

module.exports = mongoose.model('Student', studentSchema);