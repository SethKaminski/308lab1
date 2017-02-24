let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
let game = require('../models/games');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('content/index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('content/about', { title: 'About' });
});

/* GET Projects page. */
router.get('/projects', (req, res, next) => {
  res.render('content/projects', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', (req, res, next) => {
  res.render('content/services', { title: 'Services' });
});

/* GET Contact page. */
router.get('/contact', (req, res, next) => {
  res.render('content/contact', { title: 'Contact' });
});

/* GET Games page. */
router.get('/games', (req, res, next) => {
  game.find((err, games) => {
    if (err) {
      return console.error(err);
    } else {
      res.render('content/games', {
         title: 'Games',
        games: games });
    }
  });
});

module.exports = router;