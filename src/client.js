const axios = require('axios');

class Client {
  #endPoint;
  #apiKey;

  constructor() {
    this.#endPoint = process.env.PLACES_API_ENDPOINT;
    this.#apiKey = process.env.PLACES_API_KEY;
  }

  async getLocations(coordinates, radius) {
    const fixedfilters = '&keyword=pub&opennow'

    const response = await axios.get(
      `${this.#endPoint}json?` +
      `location=${coordinates.lat}%2C${coordinates.lng}` +
      `&radius=${radius}${fixedfilters}&key=${this.#apiKey}`
    )
    return response.data.results;
  }
}

module.exports = Client;
