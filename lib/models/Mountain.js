const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true,
    min: 0,
    max: 29029
  },
  isActive: {
    type: Boolean,
    required: true
  }
});
  
module.exports = mongoose.model('Mountain', schema);
