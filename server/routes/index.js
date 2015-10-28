var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hi");
  // res.return();
  // res.send("ok");
  res.redirect("/pizza");
});

/* GET login page. */
// router.get('/login', function(req, res, next) {
//   // res.render('/');
//   //next();
//   console.log("login!");
//   res.render('pizza');
// });

module.exports = router;
