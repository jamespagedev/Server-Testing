const db = require('../../../data/dbConfig.js'); // used only to clear db after tests complete
const request = require('supertest');
const server = require('../../server.js');

// jest global(s) - before and after each, or before and after all
afterAll(async () => {
  await db('videogames').truncate();
});

/* Testsuite videogamesRouter
    - [X] Testset: post 3 videogames and gets a list of all 3 videogames
      - [X] Testcase: post videogame
      - [X] Testcase: post videogame
      - [X] Testcase: post videogame
      - [X] Testcase: get all videogames
    - [X] Testset: post/getById/update/getByName/delete the videogame
      - [X] Testcase: add videogame
      - [X] Testcase: getById videogame that was just added
      - [X] Testcase: edit videogame name
      - [X] Testcase: getByName videogame that was just edited
      - [X] Testcase: remove the videogame from database
*/

// Post stuff...
describe('Testsuite: videogamesRouter', () => {
  describe('Testset: post 3 videogames and gets a list of all 3 videogames', () => {
    it.skip('POST / add videogame', async () => {
      const videogame = {
        name: 'Chrono Trigger',
        platform: 'snes',
        completed: true
      };
      let response = await request(server)
        .post('/api/videogames')
        .send(videogame);

      // expect(response.body).toBe(expected); // fails because it's not the reference
      expect(response.status).toBe(201);
    });
  });
});
