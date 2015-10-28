var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
  // console.log('stuff');
  var id = req.params.id;
  if(id > 5)
    res.send({"Pizza":"Pie"});
  else {
    res.send({"Pizza":"POO"});
  }
});

router.get('*', function(req, res, next) {
  // console.log('stuff');
  res.send({"Pizza":"Pie"});
});

module.exports = router;
