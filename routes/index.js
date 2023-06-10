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
});
router.get('/create', function(req, res, next) {
  res.render('create');
});
router.get('/team', function(req, res, next) {
  res.render('team');
});
router.post("/createaccount", async (req, res) => {
  const data = {
    Email: req.body.uemail,
    Password:req.body.upassword
    
  };
  await collects.insertMany([data]);

  res.render("signin");
});

router.post("/email", async (req, res) => {
  try {
    const check = await collects.findOne({ Email: req.body.uemail });
    if (check.Password == req.body.upassword) {
      res.render("index");
    } else {
      res.write("error password");
    }
  } catch {
    res.write("error details");
  }
});

module.exports = router;
