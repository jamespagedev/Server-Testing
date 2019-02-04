/***************************************************************************************************
 ******************************************* dependencies ******************************************
 **************************************************************************************************/
const express = require('express');
const db = require('../../data/helpers/videogamesModel.js');
const router = express.Router();

/***************************************************************************************************
 ******************************************** middleware *******************************************
 **************************************************************************************************/
// None

/***************************************************************************************************
 ********************************************** routes *********************************************
 **************************************************************************************************/
// /api/videogames - return an array list of all videogames
router.get('/', async (req, res) => {
  const videogames = await db.getAllVideoGames();

  res.status(200).json(videogames);
});

// /api/videogames - finds a single videogame by id or name, and returns videogame object
router.get('/:idOrName', async (req, res) => {
  isId = /^\d+$/.test(req.params.idOrName);
  let videogame;

  if (isId) {
    // find game by id
    videogame = await db.findById(req.params.idOrName);
  } else {
    // find game by name
    videogame = await db.findByName(req.params.idOrName);
  }
  res.status(200).json(videogame);
});

// /api/videogames - Add a videogame
router.post('/', (req, res) => {
  // implement user registration
  const videogame = req.body;

  db.addVideoGame(videogame)
    .then(result => res.status(201).json(result))
    .catch(err => res.status(500).send(err));
});

router.put('/:id', (req, res) => {
  db.editVideoGame(req.params.id, req.body)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).send(err));
});

router.delete('/:id', (req, res) => {
  db.removeVideoGame(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).send(err));
});

/***************************************************************************************************
 ********************************************* export(s) *******************************************
 **************************************************************************************************/
module.exports = router;
