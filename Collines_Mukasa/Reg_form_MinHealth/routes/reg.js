const express= require ('express')
const router = express.Router()
const register


//Renders the Register worker Page
router.get("/",(req,res)=>{
    res.render('main',{alert:req.query.alert})
})
router.post("/", (req,res)=>{
    try{
        const patient = new Patient(req.body);
        patient.save()
        res.redirect('main')
        //res.redirect("Register?alert=success")
    }catch(err){
       //res.status(400).render("Register?alert=error",{alert:req.query.alert})
    }
     
})




//Exports the Router
module.exports = router 

