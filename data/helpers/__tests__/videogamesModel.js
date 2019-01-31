const db = require('../../dbConfig.js');
const videogamesModel = require('../videogamesModel.js');

// jest global(s) - before and after each, or before and after all
afterAll(async () => {
  await db('videogames').truncate();
});

/* Testsuite: videogamesModel
    - Testset: add/get/edit/get/remove the videogame
      - Testcase: add videogame
      - Testcase: get videogame that was just added
      - Testcase: edit videogame name
      - Testcase: get videogame that was just edited
      - Testcase: remove the videogame from database
    - Testset: add3/getAll the 3 videogames

*/

// Testsuite
describe('videogames model', () => {
  // Testset
  describe('Testset: add/get/edit/get/remove the videogame', () => {
    // Testcase
    it('add videogame', async () => {
      // Setup
      let firstVideogame = {
        name: 'Chronno Trigger',
        platform: 'snes',
        completed: false
      };

      // Action(s)
      await videogamesModel.insert(videogame);

      // Result(s)
      const videogameResult = await db('videogames').where(
        'name',
        'Chronno Trigger'
      );
      expect(videogameResult).toBe(firstVideogame);
    });
  });
});
