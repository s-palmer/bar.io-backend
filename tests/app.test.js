const request = require('supertest');
const app = require('../src/app');

describe('Root route', () => {
  it('returns 200 response', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toEqual(200);
  });
});
