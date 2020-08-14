"use strict"

function createCategories(categories) {
  let container = document.querySelector("#category-pick-block");

  container.innerHTML = "";
  if (container) {
    console.dir(categories.keys())
    for (let category of categories.keys()) {
      container.insertAdjacentHTML("beforeend", `<label><input type="checkbox" value="${category}"><span>${category}</span></label>`);
    }
  }
}

function showCartProduct(product) {
  let showContainer = document.querySelector(".cart-order-list");

  if (showContainer) {
    showContainer.insertAdjacentHTML("beforeend", createCartProduct(product));
  }
}

function createCartProduct(product) {
  return `
      <div class="product-in-cart" data-order_id="${product.id()}">
      <div class="img-block">
        <img src="${product.image() && product.image().length ? product.image() : "./assets/images/default.png"}"  alt="image">
      </div>
      <div>
        <span>${product.name()}</span>
      </div>
      <div>
        <button data-event="decrease">
          <img src="./assets/images/minus.png" alt="-">
        </button>
        <span class="product-count">
          1
        </span>
        <button data-event="increase">
          <img src="./assets/images/plus.png" alt="+">
        </button>
      </div>
      <div>
        <span class="product-order-price">${product.price()} uah</span>
      </div>
    </div>
  `;
}

function updateCartProduct(product, count) {
  let id = product.id();
  let productHtml = document.querySelector(`.product-in-cart[data-order_id="${id}"]`);

  if (productHtml) {
    if (count > 0) { // update count for product in Cart
      let countHtml = productHtml.querySelector(".product-count");
      let priceHtml = productHtml.querySelector(".product-order-price");

      if (countHtml)
        countHtml.textContent = "" + count;
      if (priceHtml)
        priceHtml.textContent = `${product.price() * count} uah`;
    } else { // remove product from Cart
      document.querySelector(`.product-in-cart[data-order_id="${id}"]`)?.remove();
      if (product.count() > 0) {
        let button = document.querySelector(`[data-id="${id}"] .add-to-cart-block > button`);

        if (button) {
          button.classList.add("add-to-cart");
          button.querySelector("img").src = "./assets/images/add-to-cart.png";
        }
      }
    }
  }
}

function showProducts(productsForShow, shop, notScroll) {
  let showContainer = document.querySelector(".category-products");

  if (showContainer) {
    let scrollPosBefore = notScroll === undefined ? window.scrollY : -1;

    productsForShow.forEach((product) => {
      let productHtml = createProductHtml(product, shop._cart._productAmount.has(product));

      showContainer.insertAdjacentHTML("beforeend", productHtml);
    });
    if (scrollPosBefore !== -1 && scrollPosBefore !== window.scrollY && window.scrollY > scrollPosBefore)
      window.scrollBy(0, -(window.scrollY - scrollPosBefore));
  }
}

function createProductHtml(product, countInCart) {
  let isAvailable = product.count() - countInCart > 0 ? 1 : 0;

  return `
      <div class="product-container" data-id="${product.id()}">
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

function showPagination(shop) {
  let container = document.querySelector(".pagination-list");

  if (container !== undefined) {

    let currentPage = shop._catalog.currentPage();
    let pages = shop._catalog.pages() - 1;
    let pos = currentPage >= 1 ? currentPage - 1 : 0;

    container.innerHTML = "";

    for (let i = pos; i <= pages && i < pos + 4; i++) {
      let elemHtml = `<li class="pagination-item"><a class="pagination-link
        ${i === currentPage ? " current-page": ""}">
        ${i === pos + 3 ? pages + 1 : i + 1 === pages && i + 1 === currentPage ? 1 : i + 1}</a></li>`;
      container.insertAdjacentHTML("beforeend", elemHtml);
    }
  }
}

function showCart(cart) {
  let counter = document.querySelectorAll(".cart-counter");
  let totalPrice = document.querySelectorAll(".total-price");

  for (let i = 0; i < counter.length; i++)
    counter[i].textContent = "" + cart.count();
  for (let i = 0; i < totalPrice.length; i++)
    totalPrice[i].textContent = `${cart.totalPrice()} uah`;
}