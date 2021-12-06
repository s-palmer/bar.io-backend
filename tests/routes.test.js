const app = require('../src/routes');
const Client = require('../src/client');
const clientResults = require('../fixtures/bar_results');
const formatted_response = require('../fixtures/formatted_response');
const request = require('supertest');

describe('/bars', () => {
  const requestBody = {
    mins: 15,
    location: { lat: 51.5173523, lng: -0.0754469 }
  };

  beforeEach(() => {
    jest.spyOn(Client.prototype, 'getLocations')
    .mockImplementation(() => clientResults.results);
});

  it('returns 200 response', async () => {
    await request(app).post('/bars').expect(200);
  });

  it('sends a json response of bars requested', async () => {
    const res = await request(app)
    .post('/bars')
    .send(requestBody);

    expect(res.body).toEqual(formatted_response);
    expect(Client.prototype.getLocations)
    .toHaveBeenCalledWith(requestBody.location, 1200)
  });
});
