"use strict"

class Filters {
  _filters = [];
  _searchName = "";

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
        result.push(elem[0]);
    });
    return result;
  }
}

function availableFilter(product) {
  if (product.count() > 0)
    return true;
}

function nameFilter(product) {
  if (shop._filters._searchName != 0) {
    if (product.name().toLowerCase().includes(shop._filters._searchName.toLowerCase()))
      return true;
  } else
    return true;
}