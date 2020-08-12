"use strict"

function showProducts(productsForShow, shop) {
  let showContainer = document.querySelector(".category-products");

  if (showContainer) {
    let containerSiteBefore = showContainer.offsetHeight;

    productsForShow.forEach((product) => {
      let productHtml = createProductHtml(product, shop._cart._productAmount.has(product));

      showContainer.insertAdjacentHTML("beforeend", productHtml);
    });
    window.scrollBy(0, -(showContainer.offsetHeight - containerSiteBefore));
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

  if (counter) {
    for (let i = 0; i < counter.length; i++)
      counter[i].textContent = "" + cart.count();
  }
}