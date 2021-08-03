const express = require('express');
const router = express.Router()
const Patient = require('../models/Patient')

// render registration form
router.get('/', (req, res) => {
    res.render('register', {title:"Registration",
    alert: req.query.alert})
   
});
// register patient

router.post("/", async (req, res) => {
    try {
        const patient = new Patient(req.body);
        console.log(patient)
        await patient.save()
        res.redirect('register?alert=success')
    }
    catch (err){
        res.status(400).render('register', { title: "Register patient", alert: 'error' })
        console.log(err)
    }
    
})
module.exports = router;