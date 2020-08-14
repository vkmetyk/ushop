"use strict"

class Cart {
  constructor() {
    this._productAmount = new Map();
    this._totalPrice = 0;
  }
  add(product) {
    let it = this._productAmount.get(product);

    if (it) { // if product already exists in cart
      if (product.count() > it) {
        this._productAmount.set(product, it + 1);
        this._totalPrice += product.price();
      }
    } else {
      this._productAmount.set(product, 1);
      this._totalPrice += product.price();
    }
    showCart(this);
    showCartProduct(product);
  }
  remove(product) {
      this._productAmount.delete(product);
      showCart(this);
      updateCartProduct(product, 0);
  }
  increase(product) {
    let it = this._productAmount.get(product);

    if (it && product.count() > it) {
      this._productAmount.set(product, it + 1);
      this._totalPrice += product.price();
      showCart(this);
      updateCartProduct(product, it + 1);
    }
    else
      console.log("Max count");
  }
  decrease(product) {
    let it = this._productAmount.get(product);

    if (it) {
      it--;
      this._productAmount.set(product, it);
      if (it < 1) {
        this._productAmount.delete(product);
      }
      this._totalPrice -= product.price();
      showCart(this);
      updateCartProduct(product, it);
    }
  }
  count() {
    return this._productAmount.size;
  }
  totalPrice() {
    return this._totalPrice;
  }
}
