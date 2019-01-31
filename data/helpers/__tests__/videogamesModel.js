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
    - More Ideas to implement after MVP:
      - Add testcases to check if entry has all required fields
*/

// Testsuite
describe('Testsuite: videogamesModel', () => {
  // Testset
  describe('Testset: add/get/edit/get/remove the videogame', () => {
    // Testcase
    it('Testcase: add videogame', async () => {
      // Setup
      const firstVideogame = {
        name: 'Chronno Trigger',
        platform: 'snes',
        completed: true
      };

      // Action(s)
      await videogamesModel.addVideoGame(firstVideogame);
      const videogamesQuery = await videogamesModel.getAllVideoGames();

      // Result(s)
      expect(videogamesQuery).toHaveLength(1);
    });

    // Testcase
    it('Testcase: get videogame that was just added', async () => {
      // Setup
      const firstVideogame = {
        name: 'Chronno Trigger',
        platform: 'snes',
        completed: true
      };

      // Action(s)
      const videogamesQuery = await videogamesModel.findByName(
        firstVideogame.name
      );

      // Result(s)
      expect(videogamesQuery[0].name).toBe(firstVideogame.name);
      expect(videogamesQuery[0].platform).toBe(firstVideogame.platform);
      // Use !! to turn boolean from number 0/1 to boolean true/false
      expect(!!videogamesQuery[0].completed).toBe(firstVideogame.completed);
    });
  });
});
