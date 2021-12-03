const response = require('../fixtures/bar_results.json');
const Sorter = require('../src/sorter')

describe('Sorter', () => {
  const sorter = new Sorter;

  describe('#topFiveBars', () => {
    const results = response.results;
    const topFiveResults = sorter.topFiveBars(results);

    it('filters results to rating over four', () => {
      aboveFourRating = topFiveResults.every( bar => bar.rating > 4 );

      expect(aboveFourRating).toEqual(true);
    })

    it('adds a popular rating to each bar', () => {
      const leastRecommended = topFiveResults[0];

      expect(leastRecommended.popularRating).toEqual(53.2)
    })

    it('ordereds results to popular rating', () => {
      const leastRecommended = topFiveResults[0];

      expect(leastRecommended.name).toEqual('Bar Kick')
    })

    it('filters results down to 5 results', () => {
      expect(topFiveResults.length).toEqual(5);
    })
  })
});
