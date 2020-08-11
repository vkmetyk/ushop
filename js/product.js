"use strict"

class Product {
  _id = -1;
  _count = 0;
  _name = "";
  _category = "";
  _price = 0;
  _image = "";

  constructor(id, count, name, category, price, image) {
    this._id = id;
    this._count = count;
    this._name = name;
    this._category = category;
    this._price = price;
    this._image = image;
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

function createProductHtml(product, countInCart) {
  let isAvailable = product.count() - countInCart > 0 ? 1 : 0;

  return `
      <div class="product-container">
        <div class="product">
          <a href="#">
            <span class="product-id">code: ${product.id()}</span>
            <div class="product-image">
              <img src="${product.image() && product.image().length > 0 ? product.image() : "assets/images/default.png"}" alt="Image" class="img-fluid">
            </div>
          </a>
          <span class="product-name">${product.name()}</span>
          <span class="product-category">${product.category()}</span>
          <span class="product-price">${product.price()} uah</span>
          <div class="product-footer">
            <div class="available-block">
              <span class="${isAvailable ? "true" : "false"}">${isAvailable ? "available" : "not available"}</span>
            </div>
            <div class="add-to-cart-block">
              <button class="${isAvailable ? "add-to-cart" : ""}">
                <img src="assets/images/${countInCart > 0 ? "added-to-cart.png" : isAvailable ? "add-to-cart.png" : "cancel.png"}" alt="Add to cart">
              </button>
            </div>
          </div>
        </div>
      </div>
  `;
}
