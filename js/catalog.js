"use strict"

class Catalog {
  constructor() {
    this._pages = [];
    this._currentPage = 0;
  }
  build(shop, products, pageSize, filters) {
    this._pages = [];
    this._currentPage = 0;
    this._pages[this._currentPage] = [];
    let size = 0;

    products = products.filter((elem) => {
      if (filters.length === 0 || filters.every((currentFilter) => currentFilter(shop, elem))) {
        return true;
      }
    });
    products.forEach((elem) => {
      if (size >= pageSize) {
        size = 1;
        this._currentPage++;
        this._pages[this._currentPage] = [];
      } else
        size++;
      this._pages[this._currentPage].push(elem);
    });
  }

  pages() {
    return this._pages.length;
  }
  currentPage() {
    return this._currentPage;
  }
  changePage(index) {
    if (this._pages.length > index && index >= 0) {
      this._currentPage = index;
      return this._pages[index];
    }
    return -1;
  }
  getProduct(id) {
    if (id >= 0) {
      for (let i = 0; i < this._pages.length; i++) {
        let product = this._pages[i].find((product) => product.compare(id));

        if (product !== undefined)
          return product;
      }
    }
  }
}