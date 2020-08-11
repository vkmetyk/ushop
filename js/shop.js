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

    this._catalog.build(products, pageSize, filters);
    this.show(this._catalog.changePage(0));
    addEvents();
  }

  update() {
    this._catalog.build(this._storage.products(), this.pageSize, this._filters.filters());
  }
  changePage(page) {
    document.querySelector(".category-products").innerHTML = "";
    this.show(this._catalog.changePage(page));
  }
  showMore() {
    this.show(this._catalog.changePage(this._catalog.page() + 1));
  }
  show(productsForShow) {
    if (productsForShow) {
      console.dir(productsForShow);
      let showContainer = document.querySelector(".category-products");

      productsForShow.forEach((product) => {
        let productHtml = createProductHtml(product, this._cart._productAmount.has(product));

        showContainer.insertAdjacentHTML("beforeend", productHtml);
      });
    }
  }
}
