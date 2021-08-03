const express=require('express');
const mongoose=require('mongoose')
const Manager=require('../models/Registration')


const router=express.Router();
router.get('/', (req,res)=>{
    res.render('covid_reg', 
    	{title:"Covid-19 Test Registration Form",
    	alert:req.query.alert})
})
router.post('/',async(req,res)=>{
	const manager= new Manager(req.body);
	console.log(manager)
	await Manager.register(manager, req.body.password, (err)=>{
		if(err){
			res.status(400).render('registration',
				{title:'Create Bayoffice',
				alert:'error'})
			console.log(err)
		}else{
			res.render('bay_office')
		}
	})
});
module.exports=router;