"use strict"

class Cart {
  _productAmount = new Map();

  add(product) {
    let it = this._productAmount.get(product);

    if (it) { // if product already exists in cart
      if (product.count() > it)
        this._productAmount.set(product, it + 1);
    } else {
      this._productAmount.set(product, 1);
    }
    showCart(this);
  }
  count() {
    return this._productAmount.size;
  }
  increase(product) {
    let it = this._productAmount.get(product);

    if (it && product.count() > it)
      this._productAmount.set(product, it + 1);
    showCart(this);
  }
  decrease(product) {
    let it = this._productAmount.get(product);

    if (it) {
      it--;
      this._productAmount.set(product, it);
      if (it < 1)
        this._productAmount.delete(product);
    }
    showCart(this);
  }
}
