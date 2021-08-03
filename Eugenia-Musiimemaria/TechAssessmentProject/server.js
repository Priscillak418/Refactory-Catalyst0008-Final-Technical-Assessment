//import modules into this file (dependencies in package.json)
const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const patient = require("./Routes/regformRoute")

//instantiation
const app = express()

//settings or configurations
app.set("view engine", "pug")
app.set("Views", path.join(__dirname,"Views"))

//Allows express to serve static files from the public folder
app.use(express.static(path.join(__dirname, "Public")))
app.use(express.json())

//middle ware
app.use(express.urlencoded({ extended: true }))

//routes
app.use("/", patient)

//mongoose.connect opens a connection to the database
mongoose.connect("mongodb+srv://Eugenia:eugenia@cluster0.29a2u.mongodb.net/TechAssessmentProject?retryWrites=true&w=majority", {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (err) throw err
    console.log("Successfully connected to the database.")
})

//For non existing routes
app.get('*', (req, res)=> {
    res.status(404).send('OOPS! WRONG URL.')
})

//set this server to listen for requests on `PORT = 4000`
app.listen(3000, () => {
    console.log("listening on http://127.0.0.1:3000")
})