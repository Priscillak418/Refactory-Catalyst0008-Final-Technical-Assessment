// Dependencies
const express = require('express')
const registerRoute = require('./routes/registerRoute')
require('dotenv').config();

const app = express();
const mongoose = require('mongoose');
const port = 3000;

// mongodb connection
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

// CONFIGURATIONS
app.set('view engine', 'pug');
app.set('views', './views');

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));


//  Routes
app.get('/', (req, res) => {
    res.render('index', {title:"Registration"})

});

// Routes to register
app.use('/register', registerRoute)


// setting up server
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});