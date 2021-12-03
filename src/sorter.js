class Sorter {
  topFiveBars(results) {
    const goodRating = this.#ratingFilter(results);
    const orderedBars =  this.#orderByRating(this.#addPopulerRating(goodRating));

    return orderedBars.slice(-5).reverse();
  }

  #ratingFilter(results) {
    return results.filter( bar => bar.rating > 4 )
  }

  #addPopulerRating(results) {
    return results.map(bar => {
      bar.popularRating = this.#popularRating(bar);
      return bar;
    });
  }

  #orderByRating(results) {
    return results.sort((a, b) => {
      return a.popularRating - b.popularRating
    });
  }

  #popularRating(bar) {
    const rating = bar.rating * bar.user_ratings_total / 100
    return Math.round(rating * 10) / 10;
  }
}

module.exports = Sorter;
