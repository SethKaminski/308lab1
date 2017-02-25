let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
let game = require('../models/games');

/* GET Games page. */
router.get('/', (req, res, next) => {
  game.find((err, games) => {
    if (err) {
      return console.error(err);
    } else {
      res.render('games/index', {
         title: 'Games',
        games: games });
    }
  });
});

/* GET Edit Games page. */
router.get('/edit/:id', (req, res, next) => {
  let id = req.params.id;
  game.findById(id, (err, games) => {
    if (err) {
      console.error(err);
      res.end(error);
    } else {
        console.log(id);
      res.render('games/details', {
         title: 'Edit Games',
         buttonText: 'Edit',
         games: games });
    }
  });
});

/* Post Edit Game page. */
router.post('/edit/:id', (req, res, next) => {
  let id = req.params.id;
  let editedGame = new game({
    "_id": id,
    "name": req.body.name,
    "rating": req.body.rating,
    "cost": req.body.cost
  });

  game.update({_id: id}, editedGame, (err) => {
    if (err) {
      console.error(err);
      res.end(error);
    } else {
        res.redirect('/games')
    }
  });
});

/* GET Delete Games page. */
router.get('/delete/:id', (req, res, next) => {
  let id = req.params.id;
  game.remove({_id: id}, (err) => {
    if (err) {
      console.error(err);
      res.end(error);
    } else {
        res.redirect('/games')
    }
  });
});

/* GET Add game page. */
router.get('/add', (req, res, next) => {    
    res.render('games/details', {
        title: 'Add Games',
        buttonText: 'Add',
        games: ''});
});

/* Post Add Game page. */
router.post('/add', (req, res, next) => {
  let newGame = new game({
    "name": req.body.name,
    "rating": req.body.rating,
    "cost": req.body.cost
  });

  game.create(newGame, (err) => {
    if (err) {
      console.error(err);
      res.end(error);
    } else {
        res.redirect('/games')
    }
  });
});

module.exports = router;