var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 
router.get('/Contact', (req, res, next) => {
  res.render('Pages/Contact')
})

router.get('/Apropos', (req, res, next) => {
  res.render('Pages/Apropos')
})

router.get('/Portfolio', (req, res, next) => {
  res.render('Pages/Portfolio')
})
module.exports = router;
