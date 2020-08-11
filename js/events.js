"use strict"

function addEvents() {
  cartEvents();
  filterEvents();
  productEvents();
  paginationEvents();
}

function cartEvents() {

}

function filterEvents() {

}

function productEvents() {
  let catalog = document.querySelector(".category-products");

  catalog.addEventListener("click", (event) => {
    let button = event.target.classList.contains("add-to-cart") ? event.target :
      event.target.parentElement.classList.contains("add-to-cart") ? event.target.parentElement : false;

    if (button !== false) {
      let id = button.closest(".product").querySelector(".product-id");

      if (id) {
        id = Number(id.textContent.slice(5));
        let product = shop._storage.findProduct(id);

        if (product.count() > 0) {
          shop._cart.add(product);
          button.querySelector("img").src = "./assets/images/added-to-cart.png";
        }
      }
      button.classList.remove("add-to-cart");
    }
  });
}

function paginationEvents() {
  let showMore = document.querySelector("button.show-more");

  showMore.addEventListener("click", (event) => {
    shop.showMore();
  });
}