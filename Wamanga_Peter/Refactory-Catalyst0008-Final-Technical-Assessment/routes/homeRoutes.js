//Here, we’re importing Express into our routes file and then grabbing the router from it.
const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const TestForm = require('../models/TestForm');


//We then use the router to respond to any requests to the endpoint
//router.get tells the server what to do when a get request at a given route/path is called.
router.get('/', (req, res) => {
  res.render('home', { title: "Home" , alert: req.query.alert })
})

router.post("/", async(req, res) => {
  try {
      const testformregister = new TestForm(req.body);
      await testformregister.save();
      
      res.redirect('/home?alert=success');
      console.log(req.body);
  }
  catch (err) {
      res.status(400).render('home', { title: "Home", alert: 'error' })
      console.log(err);
  }
})

    module.exports = router;
