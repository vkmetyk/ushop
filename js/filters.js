"use strict"

class Filters {
  constructor(filters, products) {
    this._filters = [];
    this._categories = new Set;
    this._minPrice = 0;
    this._maxPrice = 0;
    this._searchName = "";

    filters.forEach((elem) => {
      this._filters.push([elem, false]);
    });
    products.forEach((elem) => {
      if (elem._category && elem._category.length > 0)
        this._categories.add(elem._category);
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

function availableFilter(shop, product) {
  if (product.count() > 0)
    return true;
}

function priceFilter(shop, product) {
  if (product.price() >= shop?._filters._minPrice && product.price() <= shop?._filters._maxPrice)
    return true;
}

function nameFilter(shop, product) {
  if (shop?._filters._searchName != 0) {
    if (product.name().toLowerCase().includes(shop?._filters._searchName.toLowerCase()))
      return true;
  } else
    return true;
}

function categoryFilter(shop, product) {
  if (shop?._filters._categories.has(product.category()))
    return true;
}

function setMinMax(pages) {
  let minElem = document.querySelector("[data-event=\"min_price\"");
  let maxElem = document.querySelector("[data-event=\"max_price\"");
  let min = pages[0][0].price();
  let max = pages[0][0].price();

  pages.forEach((products) => {
    products.forEach((products) => {
      if (products.price() < min)
        min = products.price();
      if (products.price() > max)
        max = products.price();
    });
  })
  if (minElem && maxElem) {
    minElem.value = min;
    minElem.max = max - 1;
    maxElem.value = max;
    maxElem.max = max;
  }
}