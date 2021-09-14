const { MongoMemoryServer } = require('mongodb-memory-server');
const supertest = require('supertest');
const initByDbConn = require('../server/scripts/db.init_by_dbconn');
const createApp = require('../server/app');

let app;
let db;

describe('Test /api/ path', () => {
  beforeAll(async () => {
    db = await MongoMemoryServer.create();
    const uri = db.getUri();
    await initByDbConn(uri);
    app = await createApp(uri);
  });

  test('Categories array contain required categories count', async () => {
    await supertest(app)
      .get('/api/categories')
      .expect(200)
      .then((response) => {
        // Check type and length
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(8);
      });
  });

  test('App should get items array of existed category', async () => {
    await supertest(app)
      .get('/api/categories')
      .expect(200)
      .then(async (categoriesResponse) => {
        await supertest(app)
          .get(`/api/items?id=${categoriesResponse.body[0]._id}`)
          .expect(200)
          .then((itemsResponse) => {
            // Check type and length
            expect(Array.isArray(itemsResponse.body)).toBeTruthy();
          });
      });
  });
});

describe('Test /api/admin/ path', () => {
  test("Anonymous users and users without admin role shouldn't have access to admin dashboard", async () => {
    await supertest(app).get('/api/admin').expect(403);
  });

  afterAll(async () => {
    await db.stop();
  });
});
