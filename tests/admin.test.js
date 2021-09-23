const { MongoMemoryServer } = require('mongodb-memory-server');
const supertest = require('supertest');
const initByDbConn = require('../server/scripts/db.init_by_dbconn');
const createApp = require('../server/app');
const getCookiesObj = require('../utils/getCookiesObj');

let app;
let db;
let agent;

describe('Test /api/admin/ path', () => {
  beforeAll(async () => {
    db = await MongoMemoryServer.create();
    const uri = db.getUri();
    await initByDbConn(uri);
    app = await createApp(uri);
    agent = supertest(app);
  });

  it("Anonymous users and users without admin role shouldn't have access to admin dashboard", async () => {
    await agent.get('/api/admin').expect(403);
  });

  it('Admin should have access to admin dashboard', async () => {
    const response = await agent
      .post('/api/auth/register')
      .set('Content-type', 'application/json')
      .send(
        JSON.stringify({
          email: 'user.one@gmail.com',
          password: 'Ab1234567&',
          confirm: 'Ab1234567&',
        })
      )
      .expect(200);

    await agent
      .get('/api/admin')
      .set('Cookie', [`token=${getCookiesObj(response.headers['set-cookie']).token}`])
      .expect(200);
  });

  it('Carts array contain data with correct props', async () => {
    // admin login
    const adminResponse = await agent
      .post('/api/auth/login')
      .set('Content-type', 'application/json')
      .send(
        JSON.stringify({
          email: 'user.one@gmail.com',
          password: 'Ab1234567&',
        })
      )
      .expect(200);

    // creating cart
    const categoriesResponse = await agent.get('/api/categories').expect(200);
    const itemsResponse = await agent
      .get(`/api/items?id=${categoriesResponse.body[0]._id}`)
      .expect(200);
    await agent
      .post('/api/orders')
      .set('Cookie', [`token=${getCookiesObj(adminResponse.headers['set-cookie']).token}`])
      .set('Content-type', 'application/json')
      .send(
        JSON.stringify({
          id: itemsResponse.body[0]._id,
          time: Date.now(),
        })
      )
      .expect(200);

    // getting cart array
    const cartsResponse = await agent
      .get('/api/admin/carts')
      .set('Cookie', [`token=${getCookiesObj(adminResponse.headers['set-cookie']).token}`])
      .expect(200);
    expect(Array.isArray(cartsResponse.body)).toBeTruthy();
    expect(cartsResponse.body).toContainEqual(
      expect.objectContaining({
        _id: expect.any(String),
        username: expect.any(String),
        price: expect.any(Number),
      })
    );
  });

  it('Single cart response contain array of orders with correct props', async () => {
    // admin login
    const adminResponse = await agent
      .post('/api/auth/login')
      .set('Content-type', 'application/json')
      .send(
        JSON.stringify({
          email: 'user.one@gmail.com',
          password: 'Ab1234567&',
        })
      )
      .expect(200);
    const cartsResponse = await agent
      .get('/api/admin/carts')
      .set('Cookie', [`token=${getCookiesObj(adminResponse.headers['set-cookie']).token}`])
      .expect(200);

    const singleCartsResponse = await agent
      .get(`/api/admin/carts/${cartsResponse.body[0]._id}`)
      .set('Cookie', [`token=${getCookiesObj(adminResponse.headers['set-cookie']).token}`])
      .expect(200);

    expect(singleCartsResponse.body).toMatchObject(
      expect.objectContaining({
        _id: expect.any(String),
        username: expect.any(String),
        price: expect.any(Number),
        orders: expect.any(Array),
      })
    );
  });

  afterAll(async () => {
    await db.stop();
  });
});
