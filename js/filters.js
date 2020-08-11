"use strict"

class Filters {
  _filters = [];

  constructor(filters) {

    filters.forEach((elem) => {
      this._filters.push([elem, false]);
    });
  }

  update(index) {
    let filter = this._filters[index];
    filter[1] = !filter[1];
  }
  filters() {
    let result = [];

    this._filters.forEach((elem) => {
      if (elem[1])
        result.push(elem);
    });
    return result;
  }
}

function availableFilter(product) {
  if (product.count() > 0)
    return true;
}