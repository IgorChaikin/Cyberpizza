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

  test('Categories array contain data with correct props', async () => {
    await supertest(app)
      .get('/api/categories')
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy();
        response.body.forEach((elem) => {
          expect(typeof elem._id).toEqual('string');
          expect(typeof elem.title).toEqual('string');
        });
      });
  });

  test('Filters array contain data with correct props', async () => {
    await supertest(app)
      .get('/api/filters')
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy();
        response.body.forEach((elem) => {
          expect(typeof elem._id).toEqual('string');
          expect(typeof elem.name).toEqual('string');
        });
      });
  });

  test('Discounts array contain data with correct props', async () => {
    await supertest(app)
      .get('/api/discounts')
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy();
        response.body.forEach((elem) => {
          expect(typeof elem).toEqual('number');
        });
      });
  });

  test('App should get items array of existed category, which contain data with correct props', async () => {
    await supertest(app)
      .get('/api/categories')
      .expect(200)
      .then(async (categoriesResponse) => {
        await supertest(app)
          .get(`/api/items?id=${categoriesResponse.body[0]._id}`)
          .expect(200)
          .then((itemsResponse) => {
            expect(Array.isArray(itemsResponse.body)).toBeTruthy();
            itemsResponse.body.forEach((elem) => {
              expect(typeof elem._id).toEqual('string');
              expect(typeof elem.imgPath).toEqual('string');
              expect(typeof elem.price).toEqual('number');
              expect(typeof elem.title).toEqual('string');
              expect(Array.isArray(elem.filterIds)).toBeTruthy();
              expect(typeof elem.categoryId).toEqual('string');
              if (elem.description) {
                expect(typeof elem.description).toEqual('string');
              }
            });
          });
      });
  });

  test('App should post order with existed item id. Orders array contain last order as first item', async () => {
    await supertest(app)
      .get('/api/categories')
      .expect(200)
      .then(async (categoriesResponse) => {
        await supertest(app)
          .get(`/api/items?id=${categoriesResponse.body[0]._id}`)
          .expect(200)
          .then(async (itemsResponse) => {
            const orderedId = itemsResponse.body[0]._id;
            await supertest(app)
              .post('/api/orders')
              .set('Content-type', 'application/json')
              .send(
                JSON.stringify({
                  id: orderedId,
                  time: Date.now(),
                })
              )
              .expect(200)
              .then((ordersResponse) => {
                expect(typeof ordersResponse.body.price).toEqual('number');
                expect(Array.isArray(ordersResponse.body.stages)).toBeTruthy();
                console.log(ordersResponse.body.stages[0]);
                expect(ordersResponse.body.stages[0].orders[0].item._id).toEqual(orderedId);
                console.log(ordersResponse.cookies);
              });
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
