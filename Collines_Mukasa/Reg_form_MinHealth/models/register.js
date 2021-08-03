const mongoose = require ('mongoose')

//schemas

const RegisterSchema = new mongoose.Schema ({

    displayName: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    dob: {
        type:Date
      },

    occupation: {
        type: String,
        trim: true,
      },
    nationality: {
        type: String,
        trim: true,
      },
    Gender:{
        type: String,
        trim: true,
      },
    category:{
        type: String,
        trim: true,
      },
    
    createdAt: {
        type: Date,
        default: Date.now 
    }

})

module.exports = mongoose.model('reg', RegisterSchema)