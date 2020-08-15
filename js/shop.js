"use strict"

class Shop {
  constructor(products, pageSize, filters) {
    this._storage = new Storage(products);
    this._filters = new Filters(filters, this._storage._products);
    this._catalog = new Catalog();
    this._cart = new Cart(this);
    this.pageSize = pageSize ?? 0;

    this._catalog.build(this, this._storage.products(), this.pageSize, this._filters.filters());
    this.changePage(0);
    addEvents();
  }
  update() {
    this._catalog.build(this, this._storage.products(), this.pageSize, this._filters.filters());
  }
  changePage(page, notScroll) {
    let pageIndex = this._catalog.changePage(page);

    if (pageIndex !== -1) {
      document.querySelector(".category-products").innerHTML = "";
      if (notScroll === undefined)
        window.scrollTo(0, 0);
      this.show(pageIndex, notScroll);
    }
  }
  showMore() {
    this.show(this._catalog.changePage(this._catalog.currentPage() + 1));
  }
  show(productsForShow, notScroll) {
    if (productsForShow && productsForShow !== -1) {
      showProducts(productsForShow, this, notScroll);
      showCart(this._cart);
      showPagination(this);
    }
  }
}
