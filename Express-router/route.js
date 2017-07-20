const express = require("express");

const router = express.Router();

router.use(function tikeLog(req, res, next) {
  console.log("Time : ", Date());
  next();
});


router.get("/", function(req, res) {
  res.send("Home");
});


router.get("/AboutUs", function(req, res) {
  res.send("About Us");
});

module.exports = router;
