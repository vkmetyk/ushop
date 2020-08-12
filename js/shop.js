"use strict"

class Shop {
  _storage;
  _filters;
  _catalog = new Catalog();
  _cart = new Cart();
  pageSize = 0;

  constructor(products, pageSize, filters) {
    this._storage = new Storage(products);
    this._filters = new Filters(filters);

    this._catalog.build(products, pageSize, this._filters.filters());
    this.pageSize = pageSize;
    this.changePage(0);
    addEvents();
  }

  update() {
    this._catalog.build(this._storage.products(), this.pageSize, this._filters.filters());
  }
  changePage(page) {
    let pageIndex = this._catalog.changePage(page);

    if (pageIndex !== -1) {
      document.querySelector(".category-products").innerHTML = "";
      this.show(pageIndex);
    }
  }
  showMore() {
    this.show(this._catalog.changePage(this._catalog.currentPage() + 1));
  }
  show(productsForShow) {
    if (productsForShow && productsForShow !== -1) {
      showProducts(productsForShow, this);
      showCart(this._cart);
      showPagination(this);
    }
  }
}
