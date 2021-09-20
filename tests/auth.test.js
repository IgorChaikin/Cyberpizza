const { MongoMemoryServer } = require('mongodb-memory-server');
const supertest = require('supertest');
const initByDbConn = require('../server/scripts/db.init_by_dbconn');
const createApp = require('../server/app');
const { verifyToken, signToken } = require('../server/jwt');
const getCookiesObj = require('./cookiesParser');

let app;
let db;
let agent;

describe('Test /api/auth/register path', () => {
  beforeAll(async () => {
    db = await MongoMemoryServer.create();
    const uri = db.getUri();
    await initByDbConn(uri);
    app = await createApp(uri);
    agent = supertest(app);
  });

  it('First user become admin', async () => {
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
    const decoded = verifyToken(getCookiesObj(response.headers['set-cookie']).token);
    expect(decoded?.isAdmin).toBeTruthy();
  });

  it('Another users not become admin', async () => {
    const response = await agent
      .post('/api/auth/register')
      .set('Content-type', 'application/json')
      .send(
        JSON.stringify({
          email: 'user.two@gmail.com',
          password: 'Ab1234567&',
          confirm: 'Ab1234567&',
        })
      )
      .expect(200);
    const decoded = verifyToken(getCookiesObj(response.headers['set-cookie']).token);
    expect(decoded?.isAdmin).toBeFalsy();
  });

  it("Users with incorrect e-mail can't be registered", async () => {
    await agent
      .post('/api/auth/register')
      .set('Content-type', 'application/json')
      .send(
        JSON.stringify({
          email: 'vasa',
          password: 'Ab1234567&',
          confirm: 'Ab1234567&',
        })
      )
      .expect(422);
  });

  it("Users with e-mail that already exists can't be registered", async () => {
    await agent
      .post('/api/auth/register')
      .set('Content-type', 'application/json')
      .send(
        JSON.stringify({
          email: 'user.one@gmail.com',
          password: 'Ab1234567&',
          confirm: 'Ab1234567&',
        })
      )
      .expect(409);
  });

  it("Users with different password and password confirmation are can't be registered", async () => {
    await agent
      .post('/api/auth/register')
      .set('Content-type', 'application/json')
      .send(
        JSON.stringify({
          email: 'user.three@gmail.com',
          password: 'Ab1234567&',
          confirm: 'Cd8910111&',
        })
      )
      .expect(422);
  });
});

describe('Test /api/auth/login path', () => {
  it("Users with incorrect e-mail can't login", async () => {
    await agent
      .post('/api/auth/login')
      .set('Content-type', 'application/json')
      .send(
        JSON.stringify({
          email: 'vasa',
          password: 'Ab1234567&',
        })
      )
      .expect(422);
  });

  it("Users with unexisted e-mail can't login", async () => {
    await agent
      .post('/api/auth/login')
      .set('Content-type', 'application/json')
      .send(
        JSON.stringify({
          email: 'user.unexisted@gmail.com',
          password: 'Ab1234567&',
        })
      )
      .expect(403);
  });

  it("Users with wrong password can't login", async () => {
    await agent
      .post('/api/auth/login')
      .set('Content-type', 'application/json')
      .send(
        JSON.stringify({
          email: 'user.one@gmail.com',
          password: 'Cd8910111&',
        })
      )
      .expect(403);
  });

  it("Login response don't contain password", async () => {
    const response = await agent
      .post('/api/auth/login')
      .set('Content-type', 'application/json')
      .send(
        JSON.stringify({
          email: 'user.one@gmail.com',
          password: 'Ab1234567&',
        })
      )
      .expect(200);
    expect(response.body.password).toBeUndefined();
  });

  it("Users which isn't active can't login", async () => {
    // user inactivation by admin
    const token = signToken({ isActive: true, isAdmin: true });
    const usersResponse = await agent
      .get('/api/admin/users')
      .set('Cookie', [`token=${token}`])
      .expect(200);
    const user = usersResponse.body.find((elem) => elem.email === 'user.two@gmail.com');
    await agent
      .put('/api/admin/users')
      .set('Cookie', [`token=${token}`])
      .set('Content-type', 'application/json')
      .send(
        JSON.stringify({ changes: [{ _id: user._id, isAdmin: user.isAdmin, isActive: false }] })
      )
      .expect(200);

    // attempt of inactive user to login
    await agent
      .post('/api/auth/login')
      .set('Content-type', 'application/json')
      .send(
        JSON.stringify({
          email: 'user.two@gmail.com',
          password: 'Ab1234567&',
        })
      )
      .expect(403);
  });
});

describe('Test /api/auth/logout path', () => {
  it('Logout is forbidden without cookies', async () => {
    await agent
      .post('/api/auth/logout')
      .set('Content-type', 'application/json')
      .send(
        JSON.stringify({
          email: 'user.two@gmail.com',
        })
      )
      .expect(403);
  });

  it('Logout is possible with cookies', async () => {
    // login to get token for cookies
    const response = await agent
      .post('/api/auth/login')
      .set('Content-type', 'application/json')
      .send(
        JSON.stringify({
          email: 'user.one@gmail.com',
          password: 'Ab1234567&',
        })
      )
      .expect(200);
    // logout
    await agent
      .post('/api/auth/logout')
      .set('Content-type', 'application/json')
      .set('Cookie', [`token=${getCookiesObj(response.headers['set-cookie']).token}`])
      .send(
        JSON.stringify({
          email: 'user.one@gmail.com',
        })
      )
      .expect(201);
  });
});

describe('Test /api/auth/username path', () => {
  it('Getting username withiut cookies is forbidden', async () => {
    await agent
      .get('/api/auth/username')
      .send(
        JSON.stringify({
          email: 'user.two@gmail.com',
        })
      )
      .expect(403);
  });

  it('Getting username without cookies is forbidden', async () => {
    // login to get token for cookies
    const response = await agent
      .post('/api/auth/login')
      .set('Content-type', 'application/json')
      .send(
        JSON.stringify({
          email: 'user.one@gmail.com',
          password: 'Ab1234567&',
        })
      )
      .expect(200);
    // getting e-mail
    await agent
      .get('/api/auth/username')
      .set('Cookie', [`token=${getCookiesObj(response.headers['set-cookie']).token}`])
      .send(
        JSON.stringify({
          email: 'user.two@gmail.com',
        })
      )
      .expect(200);
  });

  afterAll(async () => {
    await db.stop();
  });
});
