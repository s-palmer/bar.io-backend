const request = require('supertest');
const app = require('../src/routes');

describe('/bars', () => {
  it('returns 200 response', async () => {
    const res = await request(app).get('/bars');

    expect(res.statusCode).toEqual(200);
  });
});
