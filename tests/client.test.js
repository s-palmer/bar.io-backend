const axios = require('axios');
const Client = require('../src/client');
const clientResults = require('../fixtures/bar_results');

jest.mock('axios');

describe('getLocations', () => {
  beforeEach(() => {
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve({data: clientResults});
    });
  })

  it('calls google maps location service with parameters', async () => {
    const coordinates = { lat: 51.5173523, lng: -0.0754469 },
          radius = 1200,
          client = new Client;

    await client.getLocations(coordinates, radius);

    expect(axios.get).toHaveBeenCalledWith(
        `${process.env.PLACES_API_ENDPOINT}json?query=bar&location=` +
        `${coordinates.lat},${coordinates.lng}` +
        `&radius=${radius}&region=uk&type=bar` +
        `&key=${process.env.PLACES_API_KEY}&opennow`
    );
  });
});
