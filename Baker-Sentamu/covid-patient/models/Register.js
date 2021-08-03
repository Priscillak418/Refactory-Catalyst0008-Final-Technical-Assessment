const mongoose = require('mongoose');

const washerSchema = new mongoose.Schema({

    surname: {
        type: String,
        trim: true,
        required:true
    },
    givename: {
        type: String,
        trim: true,
        required:true
    },
        dob: {
        type: Date,
    },
    residence: {
        type: String,
        trim: true
    },
    occupation: {
        type: String,
        trim: true
    },
    nationality: {
        type: String,
        trim: true
    },
    gender: {
        type: String
    },
    category: {
        type: String,
        trim: true
    }      
})

module.exports = mongoose.model('Washer', washerSchema);