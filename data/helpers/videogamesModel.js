const db = require('../dbConfig.js');

module.exports = {
  addVideoGame,
  update,
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

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAllVideoGames() {
  return db('videogames');
}

function findById(id) {
  return null;
}

function findByName(name) {
  return db('videogames').where('name', name);
}
