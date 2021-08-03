const express = require('express');
const path = require('path');
const moment = require('moment');
const mongoose = require('mongoose');
const register = require('./routes/registerRoute');
const Register = require('./models/Register');

require('dotenv').config()

//instialize
const app = express()

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

// Configurations
app.set('view engine', 'pug')
app.set('views', './views')
app.locals.moment = moment

//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', register)

//If a Route doesnt exist
app.get('*', (req, res) => {
  res.send('Invalid url or Reource not found')
})

//Server Listening
app.listen(3000, ()=> {
    console.log('Listening on port 3000');
})
