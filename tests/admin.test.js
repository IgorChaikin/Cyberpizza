const { MongoMemoryServer } = require('mongodb-memory-server');
const supertest = require('supertest');
const initByDbConn = require('../server/scripts/db.init_by_dbconn');
const createApp = require('../server/app');

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

  afterAll(async () => {
    await db.stop();
  });
});
