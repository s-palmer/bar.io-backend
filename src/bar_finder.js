class BarFinder {
  constructor(client, sorter) {
    this.client = client;
    this.sorter = sorter;
    this.metersPerMinute = 80;
  }

  async search(coordinates, walkTime) {
    let walkTimeToMeters = this.#convertToMeters(walkTime),
        data = await this.client.getLocations(coordinates, walkTimeToMeters);

    if (data.length === 0) {
      return [];
    } else {
      let rawResults = this.sorter.topFiveBars(data);
      return this.#format(rawResults);
    }
  }

  #convertToMeters(walkTime) {
    return walkTime * this.metersPerMinute;
  }

  #format(rawResults) {
    return rawResults.map(bar => {
      return {
        name: bar.name,
        formatted_address: bar.vicinity,
        location: {
          lat: bar.geometry.location.lat,
          lng: bar.geometry.location.lng
        },
        place_id: bar.place_id,
        price_level: bar.price_level,
        rating: bar.rating,
        types: bar.types,
        user_ratings_total: bar.user_ratings_total,
        photo_reference: this.#checkForPhoto(bar)
      }
    });
  }

  #checkForPhoto(bar) {
    return bar.photos ? bar.photos[0].photo_reference : null
  }
}

module.exports = BarFinder;
