//Dependecies
const express = require('express'); 
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
const registerRoute = require("./routes/registerRoute");

//instatiate the express library and assign it to var app
const app = express(); //(2. instatiations)

//3. configurations
app.set('view engine', 'pug');
app.set('views', './views');

//mongodb connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// (4. middleware)
//body-parser handles reading data from the form element
app.use(express.urlencoded({extended: true})) 
app.use("/static", express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.use('/registerPatient',(req, res, next) => {
    console.log("A new request received at " + Date.now());
  //app.use is used to add a middleware
    // This function call tells that more processing is
    // required for the current request and is in the next middleware
    
    next();  
  });


  //routes
  app.use("/", registerRoute);

  // app.get('*', (req, res) => {
  //   res.status(404).send("404 Error!!")})
  
   
  
  //routing
 


  // this helps create a server defining the port, console.log will run whenever you listen to the port
   app.listen(3400, () =>{
      console.log('listening on 3400')
    })