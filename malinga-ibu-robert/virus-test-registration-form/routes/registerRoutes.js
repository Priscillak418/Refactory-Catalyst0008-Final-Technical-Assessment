const express = require('express');
const router = express.Router();
const Covid = require('./models/Covid');



//  washer path to access register form
router.get('/',(req,res)=>{
    res.render('register',{title:"Register For Virus Test",alert: req.query.alert})
})

router.post('/',async(req,res)=>{
    try{
        const covid = new Covid(req.body);
        await covid.save()
        res.redirect('register?alert=success')
    }
    catch (err) {
        res.status(400).render('register',{title: "Register For Virus Testr",alert:'error'})
        console.log(err)
    }
    console.log(req.body)
})


module.exports = router;  

