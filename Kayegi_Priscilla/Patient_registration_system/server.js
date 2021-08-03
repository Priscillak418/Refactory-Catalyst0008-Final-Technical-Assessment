//Dependencies
const express = require("express")
const path = require('path')
const mongoose = require('mongoose');
const patientRoutes = require('./routes/patientRoutes')

// const expressSession = require('express-session')({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: false
// });
require('dotenv').config();

//instantiations
const app = express()

//connecct to database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });


//Configurations
app.set('view engine', 'pug');
app.set('views', './views');

//middleware
app.use(express.urlencoded({ extended: true }))
// app.use(expressSession);
app.use(express.static(path.join(__dirname, 'public')));

//Routes
//registerRoutes
app.use('/register', patientRoutes);

// handle non existing routes
app.get('*', (req, res) => {
    res.status(404).send('This is an invalid URL')
})



// server
app.listen(3000, () => console.log("Listening on Port 3000!!!"));