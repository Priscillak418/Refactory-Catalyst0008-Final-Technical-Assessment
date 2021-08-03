const express = require('express');
const router = express.Router();



//GET methods
router.get('/', (req, res)=> {
    res.render('register', {title:'Register Covid Patient'})
})




module.exports = router