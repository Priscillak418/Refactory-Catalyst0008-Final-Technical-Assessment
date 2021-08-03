const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema ({
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
    catergory: {
        type: String,
        trim: true,
    },

})



module.exports = mongoose.model('Patient', patientSchema);