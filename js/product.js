"use strict"

class Product {
  constructor(id, count, name, category, price, image) {
    this._id = id ?? -1;
    this._count = count ?? 0;
    this._name = name ?? "";
    this._category = category ?? "";
    this._price = price ?? 0;
    this._image = image ?? "";
  }
  id() {
    return this._id;
  }
  count() {
    return this._count;
  }
  name() {
    return this._name;
  }
  category() {
    return this._category;
  }
  price() {
    return this._price;
  }
  image() {
    return this._image;
  }
  buy(count) {
    if (count > this._count) {
      // throw "ERROR";
      console.log("Error");
      return;
    }
    this._count -= count;
  }
  add(count) {
    this._count += count;
  }
  compare(id) {
    return this._id === id;
  }
  deepCompare(anotherProduct) {
    return this._id === anotherProduct.id && this._category === anotherProduct.category && this._name === anotherProduct.name;
  }
}

