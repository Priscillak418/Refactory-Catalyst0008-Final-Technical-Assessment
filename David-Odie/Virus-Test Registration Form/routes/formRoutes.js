const express = require("express");
const router = express.Router();
const TestRegister = require("../models/TestRegister");

router.get('/', (req, res) => {
    res.render('testForm')
});

router.post('/', async(req, res) => {
    try{
        const test = new TestRegister(req.body)
        await test.save()
        res.redirect('/')
    }catch(err){
        console.log(err)
        res.send('Sorry! Something wnet wrong.');
    }
});

module.exports = router;