const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    surname: {
      type: String,
      trim: true,
    },
    givenname: {
      type: String,
      trim: true,
    },
    dob: {
        type: Date,
        trim: true,
    },
    address: {
        type: String,
        trim: true
    },
    occupation: {
        type: String,
        trim: true,
    },
    nationality: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        trim: true,
    }
  });

module.exports = mongoose.model('Patient', patientSchema);