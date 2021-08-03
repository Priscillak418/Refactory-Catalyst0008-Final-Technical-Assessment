const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Form = require('../models/Form');

router.get('/', (req,res)=>{
    res.render('form', {title:'Form', alert:req.query.alert})
})
router.post ('/', async(req, res) => {
try{
    let form = new Form(req.body);
    await form.save()
    res.redirect('form?alert=success')
    console.log(req.body)
}
catch(err){
    res.status(400).render('form',{title :'form', alert:'error'})
}
});













module.exports = router
