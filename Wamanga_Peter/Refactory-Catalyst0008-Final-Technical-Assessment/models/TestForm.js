const mongoose = require('mongoose');

const TestFormRegSchema = new mongoose.Schema({
    surname: {
      type: String,
      trim: true,
    },
    givenname: {
      type: String,
      trim: true,
    },
    dateofbirth: {
      type: Date,
      
    },
    address: {
        type: String,
        trim: true,
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
        trim: true
    }
    
  });

module.exports = mongoose.model('TestForm', TestFormRegSchema);
//Finally, we export our mongoose model so that it can be imported and used in other files.