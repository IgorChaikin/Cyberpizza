const { MongoMemoryServer } = require('mongodb-memory-server');
const supertest = require('supertest');
const initByDbConn = require('../server/scripts/db.init_by_dbconn');
const createApp = require('../server/app');

let app;
let db;
let agent;

describe('Test /api/ path', () => {
  beforeAll(async () => {
    db = await MongoMemoryServer.create();
    const uri = db.getUri();
    await initByDbConn(uri);
    app = await createApp(uri);
    agent = supertest(app);
  });

  it('Categories array contain data with correct props', async () => {
    const response = await agent.get('/api/categories').expect(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    response.body.forEach((elem) => {
      expect(typeof elem._id).toEqual('string');
      expect(typeof elem.title).toEqual('string');
    });
  });

  it('Filters array contain data with correct props', async () => {
    const response = await agent.get('/api/filters').expect(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    response.body.forEach((elem) => {
      expect(typeof elem._id).toEqual('string');
      expect(typeof elem.name).toEqual('string');
    });
  });

  it('Discounts array contain data with correct props', async () => {
    const response = await agent.get('/api/discounts').expect(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    response.body.forEach((elem) => {
      expect(typeof elem).toEqual('number');
    });
  });

  it('App should get items array of existed category, which contain data with correct props', async () => {
    const categoriesResponse = await agent.get('/api/categories').expect(200);
    const itemsResponse = await agent
      .get(`/api/items?id=${categoriesResponse.body[0]._id}`)
      .expect(200);
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

  it('App should post order with existed item id. Orders array contain last order as first item', async () => {
    const categoriesResponse = await agent.get('/api/categories').expect(200);
    const itemsResponse = await agent
      .get(`/api/items?id=${categoriesResponse.body[0]._id}`)
      .expect(200);

    const orderedId = itemsResponse.body[0]._id;
    const ordersResponse = await agent
      .post('/api/orders')
      .set('Content-type', 'application/json')
      .send(
        JSON.stringify({
          id: orderedId,
          time: Date.now(),
        })
      )
      .expect(200);
    expect(typeof ordersResponse.body.price).toEqual('number');
    expect(Array.isArray(ordersResponse.body.stages)).toBeTruthy();
    expect(ordersResponse.body.stages[0].orders[0].item._id).toEqual(orderedId);
  });

  afterAll(async () => {
    await db.stop();
  });
});
