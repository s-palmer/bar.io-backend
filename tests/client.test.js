const axios = require('axios');
const Client = require('../src/client')

describe('getLocations', () => {
  beforeEach(() => {
    jest.mock('axios');
  })

  xit('calls google maps location service', async () => {
    // this test is currently not working
    
    const client = new Client;
    axios.get.mockResolvedValue({results: ['this works']});

    await client.getLocations();

    expect(axios).toHaveBeenCalledWith(
        'https://maps.googleapis.com/maps/api/place/textsearch/output_type?query=your_query&location=latitude,longitude&radius=number_of_meters'
    );
  });
});
