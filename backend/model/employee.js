const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Employee', employeeSchema);