const db = require('../../dbConfig.js');
const videogamesModel = require('../videogamesModel.js');

// jest global(s) - before and after each, or before and after all
afterAll(async () => {
  await db('videogames').truncate();
});

/* [X] Testsuite: videogamesModel
    - [X] Testset: add/get/edit/get/remove the videogame
      - [X] Testcase: add videogame
      - [X] Testcase: get videogame that was just added
      - [X] Testcase: edit videogame name
      - [X] Testcase: get videogame that was just edited
      - [X] Testcase: remove the videogame from database
    - [X] Testset: add3/getAll the 3 videogames
      - [X] Testcase: add videogame
      - [X] Testcase: add videogame
      - [X] Testcase: add videogame
      - [X] Testcase: get all video games
    - (Optional): More Ideas to implement after MVP:
      - Add testcases to check if entry has all required fields
*/

// Testsuite
describe('Testsuite: videogamesModel', () => {
  // Testset
  describe('Testset: add/get/edit/get/remove the videogame', () => {
    // Testcase
    it('Testcase: add videogame', async () => {
      // Setup
      const videogame = {
        name: 'Chronno Trigger',
        platform: 'snes',
        completed: true
      };

      // Action(s)
      await videogamesModel.addVideoGame(videogame);
      const videogamesQuery = await videogamesModel.getAllVideoGames();

      // Result(s)
      expect(videogamesQuery).toHaveLength(1);
    });

    // Testcase
    it('Testcase: get videogame that was just added', async () => {
      // Setup
      const videogame = {
        name: 'Chronno Trigger',
        platform: 'snes',
        completed: true
      };

      // Action(s)
      const videogameQuery = await videogamesModel.findByName(videogame.name);

      // Result(s)
      expect(videogameQuery.name).toBe(videogame.name);
      expect(videogameQuery.platform).toBe(videogame.platform);
      // Use !! to turn boolean from number 0/1 to boolean true/false
      expect(!!videogameQuery.completed).toBe(videogame.completed);
    });

    // Testcase
    it('Testcase: edit videogame name', async () => {
      // Setup
      let videogameChanges = await videogamesModel.findById(1);
      videogameChanges['name'] = 'Chrono Trigger';

      // Action(s)
      await videogamesModel.editVideoGame(
        videogameChanges.id,
        videogameChanges
      );
      const videogamesQuery = await videogamesModel.getAllVideoGames();

      // Result(s)
      expect(videogamesQuery).toHaveLength(1);
    });

    // Testcase
    it('Testcase: get videogame that was just edited', async () => {
      // Setup
      const videogame = {
        name: 'Chrono Trigger',
        platform: 'snes',
        completed: true
      };

      // Action(s)
      const videogameQuery = await videogamesModel.findByName(videogame.name);

      // Result(s)
      expect(videogameQuery.name).toBe(videogame.name);
      expect(videogameQuery.platform).toBe(videogame.platform);
      // Use !! to turn boolean from number 0/1 to boolean true/false
      expect(!!videogameQuery.completed).toBe(videogame.completed);
    });

    // Testcase
    it('Testcase: remove the videogame from database used in this testset', async () => {
      // Setup
      const videogame = await videogamesModel.findByName('Chrono Trigger');

      // Action(s)
      await videogamesModel.removeVideoGame(videogame.id);
      const videogamesQuery = await videogamesModel.getAllVideoGames();

      // Result(s)
      expect(videogamesQuery).toHaveLength(0);

      // Cleanup Testset
      await db('videogames').truncate();
    });
  });

  // Testset
  describe('Testset: add/get/edit/get/remove the videogame', () => {
    // Testcase
    it('Testcase: add first videogame', async () => {
      // Setup
      const videogame = {
        name: 'Chronno Trigger',
        platform: 'snes',
        completed: true
      };

      // Action(s)
      await videogamesModel.addVideoGame(videogame);

      // Result(s)
      const videogameQuery = await videogamesModel.findById(1);
      expect(videogameQuery.id).toBe(1);
      expect(videogameQuery.name).toBe(videogame.name);
      expect(videogameQuery.platform).toBe(videogame.platform);
      // Use !! to turn boolean from number 0/1 to boolean true/false
      expect(!!videogameQuery.completed).toBe(videogame.completed);
    });

    // Testcase
    it('Testcase: add second videogame', async () => {
      // Setup
      const videogame = {
        name: 'Parasite Eve',
        platform: 'ps1',
        completed: true
      };

      // Action(s)
      await videogamesModel.addVideoGame(videogame);

      // Result(s)
      const videogameQuery = await videogamesModel.findById(2);
      expect(videogameQuery.id).toBe(2);
      expect(videogameQuery.name).toBe(videogame.name);
      expect(videogameQuery.platform).toBe(videogame.platform);
      // Use !! to turn boolean from number 0/1 to boolean true/false
      expect(!!videogameQuery.completed).toBe(videogame.completed);
    });

    // Testcase
    it('Testcase: add third videogame', async () => {
      // Setup
      const videogame = {
        name: 'Xenogears',
        platform: 'ps1',
        completed: true
      };

      // Action(s)
      await videogamesModel.addVideoGame(videogame);

      // Result(s)
      const videogameQuery = await videogamesModel.findById(3);
      expect(videogameQuery.id).toBe(3);
      expect(videogameQuery.name).toBe(videogame.name);
      expect(videogameQuery.platform).toBe(videogame.platform);
      // Use !! to turn boolean from number 0/1 to boolean true/false
      expect(!!videogameQuery.completed).toBe(videogame.completed);
    });
  });
});
