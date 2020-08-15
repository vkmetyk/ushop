"use strict"

class Filters {
  constructor(filters, products) {
    this._filters = [];
    this._categories = new Map;
    this._minPrice = 0;
    this._maxPrice = 0;
    this._searchName = "";

    filters.forEach((elem) => {
      this._filters.push([elem, false]);
    });
    products.forEach((elem) => {
      if (elem._category && elem._category.length > 0)
        this._categories.set(elem.category(), false);
    });
    setMinMax(this, products);
    createCategories(this._categories);
  }
  update(name, value) {
    let index = this._filters.findIndex(((filter) => filter[0] === name));
    if (index !== -1)
      this._filters[index][1] = Boolean(value);
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

function availableFilter(shop, product) {
  if (product.count() > 0)
    return true;
}

function priceFilter(shop, product) {
  if (product.price() >= shop?._filters._minPrice && product.price() <= shop?._filters._maxPrice)
    return true;
}

function categoryFilter(shop, product) {
  let category = shop?._filters._categories.get(product.category());

  if (category === true)
    return true;
}

function nameFilter(shop, product) {
  if (shop?._filters._searchName != 0) {
    if (product.name().toLowerCase().includes(shop?._filters._searchName.toLowerCase()))
      return true;
  } else
    return true;
}

function changeNameFilter(value) {
  for (let i = 0; i < shop._filters._filters.length; i++) {
    if (shop._filters._filters[i][0] === nameFilter) {
      shop._filters._searchName = value;
      if (shop._filters._searchName.length <= 0) {
        shop._filters._filters[i][1] = false;
      } else
        shop._filters._filters[i][1] = true;
      break;
    }
  }
  shop.update();
  shop.changePage(0);
}

function setMinMax(filters, products) {
  let minElem = document.querySelector("[data-event=\"min_price\"");
  let maxElem = document.querySelector("[data-event=\"max_price\"");
  let prices = [];
  let min = 0;
  let max = 1;

  products.forEach((product) => prices.push(product.price()));
  filters._minPrice = min = Math.min(...prices);
  filters._maxPrice = max = Math.min(...prices);
  max = Math.max(...prices);
  if (minElem && maxElem) {
    minElem.value = min;
    minElem.max = max - 1;
    maxElem.value = max;
    maxElem.max = max;
  }
}
