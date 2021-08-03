const mongoose = require('mongoose')
const formSchema = new mongoose.Schema({
    surname:{
        type: String,
        trim: true
    },

    givenname:{
        type: String,
        trim: true
    },

    dob:{
        type: Date,
        
    },

    res:{
        type: String,
        trim: true
    },

    occupation:{
        type: String,
        trim: true
    },

    nationality:{
        type: String,
        trim: true
    },

    flexRadioDefault:{
        type: String,
        trim: true
    },

    field:{
        type: String,
        trim: true
    }
 
})
module.exports=mongoose.model('Form', formSchema)