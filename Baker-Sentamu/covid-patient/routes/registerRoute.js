const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Register = require('../models/Register');



//GET methods
router.get('/', (req, res) => {
    res.render('register', {
        title: "Register Covid Patient",
        alert: req.query.alert
    })
})

router.post("/", async (req, res) => {
    try {
        const register = new Register(req.body);
        await register.save()
        res.redirect('?alert=success')
    }
    catch (err) {
        res.status(400).render('register', { title: "Register Covid Patient", alert: 'error'})
        console.log(err)
    }
})




module.exports = router