const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema({
  State_Union_Territory: {
    type: String,
    required: true
  },
  District: {
    type: String,
    required: true
  },
  Soil_Type: {
    type: String,
    required: true
  },
  Climate_Type: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('District', districtSchema); 