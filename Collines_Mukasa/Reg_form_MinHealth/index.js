const express = require ('express')
const mongoose = require ('mongoose')
const dotenv = require ('dotenv')
const path = require ('path')
const connectDB = require ('./config/db')

//load config 
dotenv.config({path: './config/config.env'})


//intialize app & middleware
const app = express()


//static folders
app.use (express.static(path.join(__dirname, 'public')))

//routes

app.use ('/', require('./routes/reg'))

//set pug engine
app.set("view engine","pug")

app.set("views","./views")




//MiddleWare Routes
app.use("/",reg)


//connect DB 
connectDB()


// handle non existing routes
app.get('*', (req, res)=> {
    res.status(404).send('This is an invalid URL')
})

// Running port 
app.listen(3000, () => console.log('Server is listening'));

