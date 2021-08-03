// Dependecies
const express = require("express");
const path = require('path');
const registerRoutes = require('./routes/registerRoutes');
const Covid = require('./models/Covid');






// const reportRoutes = require('./routes/reportRoutes');
require('dotenv').config();
const mongoose = require('mongoose');




// instantiations
const app = express()

// mongodb connection
//DATABASE=mongodb://localhost:27017/corhot-0008
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
  

// settings or configurations
app.set('view engine', 'pug');
app.set('views', './views');



// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));




// routes
//route for register form
app.use('/register', registerRoutes);



// handle non existing routes
app.get('*', (req, res)=> {
    res.status(404).send('This is an invalid URL')
})

// server
app.listen(3000, ()=> console.log("Listening on Port 3000!!!"));