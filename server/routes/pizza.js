var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
  // console.log('stuff');
  res.send({"Pizza":"Pie"});
});

module.exports = router;
