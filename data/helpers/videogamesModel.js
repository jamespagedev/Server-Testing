const db = require('../dbConfig.js');

module.exports = {
  addVideoGame,
  editVideoGame,
  removeVideoGame,
  getAllVideoGames,
  findById,
  findByName
};

async function addVideoGame(videogame) {
  const [id] = await db('videogames').insert(videogame);

  return db('videogames')
    .where({ id })
    .first();
}

async function editVideoGame(id, changes) {
  const numId = Number(id);

  return await db('videogames')
    .where('id', id)
    .update(changes)
    .then(id => (id > 0 ? id : null));
}

function removeVideoGame(id) {
  return db('videogames')
    .where('id', id)
    .del();
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
