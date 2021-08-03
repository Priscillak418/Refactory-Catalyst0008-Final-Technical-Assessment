const mongoose = require('mongoose');

const covidSchema = new mongoose.Schema({
  surname: {
    type: String,
    trim: true,
  },
  givinname: {
    type: String,
    trim: true,
  },
  dob: {
    type: Date,
    trim: true,
  },
  nationality: {
    type: String,
    trim: true,
  },
  por: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  occupation: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  }
  
});
module.exports = mongoose.model('Covid', covidSchema);