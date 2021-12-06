const axios = require('axios');

class Client {
  #endPoint;
  #apiKey;

  constructor() {
    this.#endPoint = process.env.PLACES_API_ENDPOINT;
    this.#apiKey = process.env.PLACES_API_KEY;
  }

  async getLocations(coordinates, radius) {
    const fixedfilters = '&region=uk&type=bar'

    const response = await axios.get(
      this.#endPoint +
      'json?query=bar' +
      `&location=${coordinates.x},${coordinates.y}` +
      `&radius=${radius}${fixedfilters}&key=${this.#apiKey}&opennow`
    )
    return response.data.results;
  }
}

module.exports = Client;
