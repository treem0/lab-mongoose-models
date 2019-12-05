const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true,
    min: 1900,
    max: 2022
  },
  hasMotor: {
    type: Boolean,
    required: true
  }
});
  
module.exports = mongoose.model('Car', schema);
