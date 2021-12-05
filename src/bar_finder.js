class BarFinder {
  constructor(client, sorter) {
    this.client = client;
    this.sorter = sorter;
    this.metersPerMinute = 80;
  }

  search(coordinates, walkTime) {
    let walkTimeToMeters = this.#convertToMeters(walkTime),
        data = this.client.getLocations(coordinates, walkTimeToMeters),
        rawResults = this.sorter.topFiveBars(data);

        return this.#format(rawResults);
  }

  #convertToMeters(walkTime) {
    return walkTime * this.metersPerMinute;
  }

  #format(rawResults) {
    return rawResults.map(bar => {
      return {
        name: bar.name,
        formatted_address: bar.formatted_address,
        location: {
          lat: bar.geometry.location.lat,
          lng: bar.geometry.location.lng
        },
        place_id: bar.place_id,
        price_level: bar.price_level,
        rating: bar.rating,
        types: bar.types
      }
    });
  }
}

module.exports = BarFinder;
