class BarFinder {
  constructor(client, sorter) {
    this.client = client;
    this.sorter = sorter;
  }

  search(coordinates, walkTime) {
    const metersPerMinute = 80,
          walkTimeToMeters = walkTime * metersPerMinute;

    let data = this.client.getLocations(coordinates, walkTimeToMeters),
        rawResults = this.sorter.topFiveBars(data);
  }
}

module.exports = BarFinder;
