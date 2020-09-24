"use strict"

class Cart {
  constructor(shop) {
    this._productAmount = new Map();
    this._totalPrice = 0;
    getAllFromLocalStorage(shop, this);
  }
  add(product) {
    let it = this._productAmount.get(product);

    if (it) { // if product already exists in cart
      if (product.count() > it) {
        this._productAmount.set(product, it + 1);
        setToLocalStorage(product.id(), it + 1);
        this._totalPrice += product.price();
        updateCartProduct(product, it + 1);
      }
    } else {
      this._productAmount.set(product, 1);
      setToLocalStorage(product.id(), 1);
      this._totalPrice += product.price();
      showCart(this);
      showCartProduct(product);
    }
  }
  remove(product) {
    this._totalPrice -= product.price() * this._productAmount.get(product);
    this._productAmount.delete(product);
    updateCartProduct(product, 0);
    removeFromLocalStorage(product.id());
    showCart(this);
  }
  increase(product) {
    let it = this._productAmount.get(product);

    if (it && product.count() > it) {
      this._productAmount.set(product, it + 1);
      setToLocalStorage(product.id(), it + 1);
      this._totalPrice += product.price();
      showCart(this);
      updateCartProduct(product, it + 1);
    }
  }
  decrease(product) {
    let it = this._productAmount.get(product);

    if (it) {
      it--;
      this._productAmount.set(product, it);
      setToLocalStorage(product.id(), it);
      this._totalPrice -= product.price();
      if (it < 1) {
        this.remove(product);
        removeFromLocalStorage(product.id());
      } else {
        showCart(this);
        updateCartProduct(product, it);
      }
    }
  }
  count() {
    return this._productAmount.size;
  }
  totalPrice() {
    return this._totalPrice;
  }
}

function getAllFromLocalStorage(shop, cart) {
  let keys = Object.keys(localStorage);

  for (let key of keys) {
    let product = shop._storage.findProduct(+key);
    if (product) {
      let count = +localStorage.getItem(key);

      if (count > 0) {
        cart._productAmount.set(product, count);
        cart._totalPrice += (product.price() * count);
        showCart(cart);
        showCartProduct(product);
        updateCartProduct(product, count);
      }
    }
  }
}

function setToLocalStorage(id, count) {
  if (count > 0)
    localStorage.setItem("" + id, "" + count);
  else
    removeFromLocalStorage(id);
}

function removeFromLocalStorage(id) {
  localStorage.removeItem("" + id);
}