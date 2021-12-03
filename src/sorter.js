class Sorter {
  topFiveBars(results) {
    const goodRating = this.#ratingFilter(results);
    const orderedBars =  this.#orderByRating(this.#addpopularityRating(goodRating));

    return orderedBars.slice(-5).reverse();
  }

  #ratingFilter(results) {
    return results.filter( bar => bar.rating > 4 )
  }

  #addpopularityRating(results) {
    return results.map(bar => {
      bar.popularityRating = this.#popularityRating(bar);
      return bar;
    });
  }

  #orderByRating(results) {
    return results.sort((a, b) => {
      return a.popularityRating - b.popularityRating
    });
  }

  #popularityRating(bar) {
    const rating = bar.rating * bar.user_ratings_total / 100
    return Math.round(rating * 10) / 10;
  }
}

module.exports = Sorter;
