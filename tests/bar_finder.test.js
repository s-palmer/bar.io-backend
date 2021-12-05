const BarFinder = require('../src/bar_finder');
const clientResults = require('../fixtures/bar_results');
const topFiveResults = require('../fixtures/top_five_bars')
const client = { getLocations() { return clientResults } };
const sorter = { topFiveBars() { return topFiveResults } };

describe('BarFinder', () => {
  const barFinder = new BarFinder(client, sorter);
  const coordinates = { lat: 51.52485152010727, lng: -0.08727042989272221 };
  const walkTime = 15;

  describe('search', () => {
    beforeEach(() => {
      jest.spyOn(client, 'getLocations');
      jest.spyOn(sorter, 'topFiveBars');
    })

    it('calls the client with coordinates and meter radius', () => {
      const radiusInMeters = 1200;

      barFinder.search(coordinates, walkTime);

      expect(client.getLocations).toHaveBeenCalledWith(coordinates, radiusInMeters);
    });

    it('calls the sorter with client results', () => {
      barFinder.search(coordinates, walkTime);

      expect(sorter.topFiveBars).toHaveBeenCalledWith(clientResults);
    });
  });
});
