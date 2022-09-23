/*
Student Number : 301152761
Student Name: Sujatha Mohanram
Assignment : 1
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
