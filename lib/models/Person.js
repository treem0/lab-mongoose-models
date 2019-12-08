const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 130
  },
  legs: {
    type: Number,
    required: true,
    min: 0,
    max: 2
  }
});
  
module.exports = mongoose.model('Person', schema);
