const app = require('../src/routes');
const Client = require('../src/client');
const clientResults = require('../fixtures/bar_results');
const formatted_response = require('../fixtures/formatted_response');
const request = require('supertest');

describe('/bars', () => {
  beforeEach(() => {
    jest.spyOn(Client.prototype, 'getLocations')
    .mockImplementation(() => clientResults.results);
});

  it('returns 200 response', async () => {
    await request(app).get('/bars').expect(200);
  });

  it('contains a json response', async () => {
    const res = await request(app).get('/bars');

    expect(res.body).toEqual(formatted_response);
  });
});
