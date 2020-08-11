"use strict"

class Catalog {
  _pages = [];
  _currentPage = 0;

  build(products, pageSize, filters) {
    this._pages = [];
    this._currentPage = 0;
    this._pages[this._currentPage] = [];
    let size = 0;

    products.filter((elem) => {
      if (filters.every((currentFilter) => currentFilter(elem))) {
        return true;
      }
    });

    products.forEach((elem) => {
      if (size >= pageSize) {
        size = 0;
        this._currentPage++;
        this._pages[this._currentPage] = [];
      } else
        size++;
      this._pages[this._currentPage].push(elem);
    });
  }

  page() {
    return this._currentPage;
  }
  changePage(index) {
    if (this._pages.length >= index) {
      this._currentPage = index;
      return this._pages[index];
    }
  }
}