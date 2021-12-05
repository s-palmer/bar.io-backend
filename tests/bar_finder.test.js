const BarFinder = require('../src/bar_finder');
const barResults = require('../fixtures/bar_results');
const client = { getLocations() { return barResults } };
const sorter = jest.fn();

describe('BarFinder', () => {
  const barFinder = new BarFinder(client, sorter);
  const coordinates = { lat: 51.52485152010727, lng: -0.08727042989272221 };
  const walkTime = 15;

  describe('search', () => {
    it('calls the client with coordinates and meter radius', () => {
      const radiusInMeters = 1200;
      jest.spyOn(client, 'getLocations');

      barFinder.search(coordinates, walkTime);

      expect(client.getLocations).toHaveBeenCalledWith(coordinates, radiusInMeters);
    });
  });
});
