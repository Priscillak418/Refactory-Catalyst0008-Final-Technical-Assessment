//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const homeRoutes = require("./routes/homeRoutes");

require('dotenv').config();
//INSTANTIATIONS- Are statements to create an object
//We create a new Express app using the express function and assigning it to an app variable.
//Express is a nodejs framework for writing web apps
const app = express();

//mongoose connection
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

//CONFIGURATIONS OR SETTINGS- Are custom application based settings
//We configure app.js to use Pug as a layout engine and to look for templates inside the views folder:
app.set("view engine", "pug");
app.set("views", "./views");

//MIDDLEWARE- These are used to determine the flow of the response cycle
app.use(express.urlencoded({ extended: true }));

// css access
app.use(express.static("public"));



// ROUTES
//We tell the app that, whenever it receives a request from forward slash anything, it should use the routes file.
app.use("/home", homeRoutes);

//The code below is use to handle non existing routes.
app.get("*", (req, res) => {
  res.status(404).send("This is an invalid URL, please try another");
});

//Binds and listens for connections on the specified host and port.In my case port 2000
app.listen(2500, () => {
  console.log("I am listening in on port 2500");
});




