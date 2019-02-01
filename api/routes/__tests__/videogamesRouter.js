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
    it('POST / add videogame', async () => {
      const videogame = {
        name: 'Chrono Trigger',
        platform: 'snes',
        completed: true
      };
      let response = await request(server)
        .post('/api/videogames')
        .send(videogame);

      expect(response.status).toBe(201);
      expect(response.body.id).toBe(1);
    });

    it('POST / add videogame', async () => {
      const videogame = {
        name: 'Parasite Eve',
        platform: 'ps1',
        completed: true
      };
      let response = await request(server)
        .post('/api/videogames')
        .send(videogame);

      expect(response.status).toBe(201);
      expect(response.body.id).toBe(2);
    });

    it('POST / add videogame', async () => {
      const videogame = {
        name: 'Xenogears',
        platform: 'ps1',
        completed: true
      };
      let response = await request(server)
        .post('/api/videogames')
        .send(videogame);

      expect(response.status).toBe(201);
      expect(response.body.id).toBe(3);
    });

    it('GET / all videogames', async () => {
      let response = await request(server).get('/api/videogames');

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(3);
    });
  });
});
