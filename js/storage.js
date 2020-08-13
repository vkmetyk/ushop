"use strict"

class Storage {
  constructor(products) {
    this._products = products ?? [];
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
  sort(sortType) {
    if (sortType === "1: name")
      this._products.sort((a, b) => a.name().localeCompare(b.name()));
    else if (sortType === "2: cheap")
      this._products.sort((a, b) => a.price() - b.price());
    else if (sortType === "3: expensive")
      this._products.sort((a, b) => b.price() - a.price());
  }
}
