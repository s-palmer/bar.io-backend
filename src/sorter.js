class Sorter {
  topFiveBars(results) {
    const goodRating = this.#ratingFilter(results);
    return goodRating
  }

  #ratingFilter(results) {
    return results.filter( bar => bar.rating > 4 )
  }
}

module.exports = Sorter;
