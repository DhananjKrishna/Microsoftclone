var express = require('express');
var router = express.Router();
var collects = require("./mongodb");
const { ObjectId } = require("mongodb");
const { default: mongoose } = require("mongoose");
const mongodb = require("./mongodb");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MS' });
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
})
router.post("/email", async (req, res) => {
  try {
    const check = await collects.findOne({ Email: req.body.uemail });
    if (check.Email == req.body.uemail) {
      res.render("password");
    } else {
      res.render("errors");
    }
  } catch {
    res.render("error");
  }
});


module.exports = router;
