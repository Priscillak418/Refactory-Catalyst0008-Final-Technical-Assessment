const express = require("express");
const mongoose = require('mongoose');
const patientSchema = require("../models/patientSchema");
const router = express.Router();

//specify what to do when the user hits the '/register'
router.get('/', (req, res) => {
    res.render('registration', { title: "Patient_registration_form", alert: req.query.alert })
})

router.post("/", async (req, res) => {
    try {
        const patient = new Patient(req.body);
        await patient.save()
        // res.redirect('washer')
        res.redirect('register?alert=success')
    }
    catch (err) {
        res.status(400).render('registration', { title: "Patient_registration_form", alert: 'error' })
        console.log(err)
    }
})

//Export the router.It makes the code in this file accessible in other places
module.exports = router;