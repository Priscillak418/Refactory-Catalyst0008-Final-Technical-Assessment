//require dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config()
const formroute = require('./routes/formroute')


//instantiations
const app = express();

//connect mongoose
// mongoose.connect('mongodb://localhost:27017/trial', {useNewUrlParser: true, useUnifiedTopology: true});
//mongodb connection & set up
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
});

//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))


//settings or configurations
app.set('views', './views'); 
app.set('view engine', 'pug')

//routes
app.use('/', formroute)
//handle non exisiting routes
app.get('*', (req, res) => { 
    res.send('OOPS! WRONG ADDRESS!');
  })
  
  //server...creating server
  app.listen(2000, function() {
    console.log('listening on 2000')
  })
  