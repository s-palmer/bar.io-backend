class BarFinder {
  constructor(client, sorter) {
    this.client = client;
    this.sorter = sorter;
  }

  search(coordinates, walkTime) {
    const metersPerMinute = 80,
          walkTimeToMeters = walkTime * metersPerMinute;

    this.client.getLocations(coordinates, walkTimeToMeters);
  }
}

module.exports = BarFinder;
