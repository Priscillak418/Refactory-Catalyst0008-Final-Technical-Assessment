const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Register = require("../Models/regformModel")

router.get('/', (req, res) => {
    res.render("regform")
})

router.post('/', async(req, res) => {
    const newRegister = new Register({
        surname: req.body.surname,
        givenName: req.body.givenName,
        dob: req.body.dob,
        residence: req.body.residence,
        occupation: req.body.occupation,
        nationality: req.body.nationality,
        gender: req.body.gender,
        field: req.body.field
    })

    await newRegister
        //save to the database
        .save()
        //promise given
        .then((item) => console.log("Saved succesfully: " + item))
        //catch an error literally
        .catch((err) => console.log(err))

    res.redirect("/")
})

module.exports = router