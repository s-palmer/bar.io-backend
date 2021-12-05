const BarFinder = require('../src/bar_finder');
const clientResults = require('../fixtures/bar_results');
const topFiveResults = require('../fixtures/top_five_bars')
const coordinates = { lat: 51.52485152010727, lng: -0.08727042989272221 };
const walkTime = 15;

describe('BarFinder', () => {
  let client = { getLocations() { return clientResults } };
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

      expect(sorter.topFiveBars).toHaveBeenCalledWith(clientResults);
    });

    it('returns formatted results', () => {
      const formattedResults = {
        name: 'Bar Kick',
        formatted_address: '127 Shoreditch High St, London E1 6JE',
        location: { lat : 51.526849, lng : -0.078222 },
        place_id: 'ChIJG9HAbrocdkgR9GeXpRzGL6U',
        price_level: 2,
        rating: 4.2,
        types: [ 'bar', 'point_of_interest', 'establishment' ]
      }

      results = barFinder.search(coordinates, walkTime);


      expect(results[0]).toEqual(formattedResults);
      expect(results.length).toEqual(5);
    });

    describe('when client returns empty results', () => {
      let client = { getLocations() { return {} } };
      let sorter = { topFiveBars() { return {} } };
      let barFinder = new BarFinder(client, sorter);

      it('returns an empty object', () => {
        console.log(client.getLocations());
        result = barFinder.search(coordinates, walkTime);
        expect(result).toEqual({});
      })
    })
  });
});
