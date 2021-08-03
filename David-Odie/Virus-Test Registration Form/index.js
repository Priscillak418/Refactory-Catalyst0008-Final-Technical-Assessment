const express = require("express");
const formRoutes = require("./routes/formRoutes");
const mongoose = require('mongoose');

require('dotenv').config();

//Instanciation
const app = express();

//Db connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//Connection to database using mongoose
mongoose.connection.
on('open', () => {
console.log('Mongoose connection open');
})
.on('error', (err) => {
console.log(`Connection error: ${err.message}`);
});

//Middleware
app.use(express.urlencoded({
    extended: true
}));

//Static files
app.use(express.static('public'));

//Middleware configuration
app.set('views', 'views');
app.set('view engine', 'pug');

//Route
app.use('/', formRoutes);

app.listen(4000, () => {
    console.log('Listening on port 4000')
});