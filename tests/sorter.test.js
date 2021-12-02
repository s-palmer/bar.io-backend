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

    xit('filters results down to 5 results', () => {
      expect(topFiveResults.length).toEqual(5);
    })
  })
});
