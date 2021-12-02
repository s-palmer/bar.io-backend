const axios = require('axios');

class Client {
  async getLocations(coordinates, radius) {
    const endPoint = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=bar'
    const fixedfilters = '&region=uk&type=bar'

    const response = await axios.get(
      endPoint +
      `&location=${coordinates.x},${coordinates.y}` +
      `&radius=${radius}${fixedfilters}&key=API_KEY_HERE&opennow`
    )
    return response;
  }
}

module.exports = Client;
