"use strict"

class Storage {
  _products = [];

  constructor(products) {
    this._products = products;
  }

  products() {
    return this._products;
  }
  add(product) {
    let it = this._products.find((item) => item.compare(product.id()));

    if (it === undefined) {
      this._products.push(product);
    } else
      it.add(product.count());
  }
  findProduct(id) {
    return this._products.find(elem => elem.id() === id);
  }
}