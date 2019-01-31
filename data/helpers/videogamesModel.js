const db = require('../dbConfig.js');

module.exports = {
  addVideoGame,
  editVideoGame,
  remove,
  getAllVideoGames,
  findById,
  findByName
};

async function addVideoGame(videogame) {
  const id = await db('videogames').insert(videogame);

  return db('videogames')
    .where('id', id)
    .first();
}

async function editVideoGame(id, changes) {
  return await db('videogames')
    .where('id', id)
    .update(changes)
    .then(ids => (ids > 0 ? ids[0] : null));

  return db('videogames')
    .where('id', id)
    .first();
}

function remove(id) {
  return null;
}

function getAllVideoGames() {
  return db('videogames');
}

function findById(id) {
  return db('videogames')
    .where('id', id)
    .first();
}

function findByName(name) {
  return db('videogames')
    .where('name', name)
    .first();
}
