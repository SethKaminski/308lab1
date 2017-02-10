let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About' });
});

/* GET Projects page. */
router.get('/projects', (req, res, next) => {
  res.render('index', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', (req, res, next) => {
  res.render('index', { title: 'Services' });
});

/* GET Contact page. */
router.get('/contact', (req, res, next) => {
  res.render('index', { title: 'Contact' });
});


module.exports = router;