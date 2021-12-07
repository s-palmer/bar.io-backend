const BarFinder = require('../src/bar_finder');
const clientResults = require('../fixtures/bar_results');
const topFiveResults = require('../fixtures/top_five_bars');
const formatted_response = require('../fixtures/formatted_response');
const coordinates = { lat: 51.52485152010727, lng: -0.08727042989272221 };
const walkTime = 15;

describe('BarFinder', () => {
  let client = { getLocations() { return clientResults.results } };
  let sorter = { topFiveBars() { return topFiveResults.results } };
  let barFinder = new BarFinder(client, sorter);

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

      expect(sorter.topFiveBars).toHaveBeenCalledOnce;
    });

    it('returns formatted results', async () => {
      results = await barFinder.search(coordinates, walkTime);


      expect(results).toEqual(formatted_response.results);
      expect(results.length).toEqual(5);
    });

    describe('when client returns empty results', () => {
      let client = { getLocations() { return [] } };
      let sorter = { topFiveBars() { return [] } };
      let barFinder = new BarFinder(client, sorter);

      it('returns an empty object', async () => {
        result = await barFinder.search(coordinates, walkTime);
        expect(result).toEqual([]);
      })
    })
  });
});
