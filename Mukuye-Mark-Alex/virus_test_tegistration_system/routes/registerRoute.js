const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Health = require("../Models/CovidTest");
   
   router.get("/", (req, res) => {
    res.render("covid", {
      title: "COVID Test System",
      alert: req.query.alert,
    });
  });
  
  router.post("/", async (req, res) => {
    try {
      const health = new Health(req.body);
      await health.save();
  
      res.redirect("?alert=success");
    } catch (err) {
      res
        .status(400)
        .render("covid", { title: "COVID Test System", alert: "error" });
      console.log(err);
    }
  });

  module.exports = router;