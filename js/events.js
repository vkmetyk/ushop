"use strict"

function addEvents() {
  cartEvents();
  filterEvents();
  productEvents();
  showMoreEvents();
  paginationEvents();
}

function cartEvents() {
  let cartIcon = document.querySelector(".cart-container");
  let cartOrderContainer = document.querySelector(".cart-order-container");
  let cartClose = document.querySelectorAll(".cart-close");

  if (cartIcon) {
    cartIcon.onclick = (event) => {
      let cartContainer = document.querySelector(".cart-order-container");

      if (cartContainer)
        cartContainer.style.display = cartContainer.style.display === "grid" ? "none" : "grid";
    };
  }
  if (cartOrderContainer) {
    cartOrderContainer.onclick = (event) => {
      if (event.target.classList.contains("cart-order-container")) {
        let backgroundContainer = document.querySelector(".cart-order-container");

        if (backgroundContainer)
          backgroundContainer.style.display = backgroundContainer.style.display === "grid" ? "none" : "grid";
      }
    };
    cartProductEvents(cartOrderContainer);
  }
  if (cartClose) {
    cartClose.forEach((button) => {
      button.onclick = (event) => {
        if (event.target.closest(`[data-event="close_cart"]`) !== null) {
          let cartContainer = document.querySelector(".cart-order-container");

          if (cartContainer)
            cartContainer.style.display = cartContainer.style.display === "grid" ? "none" : "grid";
        }
      };
    });
  }
}

function cartProductEvents(container) {
  let productsContainer = container.querySelector(".cart-order-list");

  if (productsContainer) {
    productsContainer.onclick = (event) => {
      let productId = event.target.closest(".product-in-cart")?.dataset.order_id;

      if (productId !== undefined) {
        let ourEvent = event.target.dataset.event ? event.target.dataset.event : event.target.parentElement.dataset.event;

        if (ourEvent !== undefined) {
          if (ourEvent === "increase") {
            console.dir(shop._catalog.getProduct(+productId));
            shop._cart.increase(shop._catalog.getProduct(+productId));
          }
          else if (ourEvent === "decrease") {
            shop._cart.decrease(shop._catalog.getProduct(+productId));
          }
        }
      }
    };
  }
}

function filterEvents() {
  let available = document.querySelector("#availability-input");
  let search = document.querySelector(".search-button");
  let sorter = document.querySelector(".select-css");

  if (available) {
    available.onclick = (event) => {
      for (let i = 0; i < shop._filters._filters.length; i++) {
        if (shop._filters._filters[i][0] === availableFilter) {
          shop._filters.update(i);
          break;
        }
      }
      shop.update();
      shop.changePage(0);
    };
  }
  if (search) {
    search.onclick = (event) => {
      let input = event.target?.parentElement?.parentElement?.querySelector(".search-input");

      if (input !== undefined) {
        for (let i = 0; i < shop._filters._filters.length; i++) {
          if (shop._filters._filters[i][0] === nameFilter) {
            shop._filters._searchName = input.value.trim();
            if (shop._filters._searchName.length <= 0) {
              shop._filters._filters[i][1] = false;
            } else
              shop._filters._filters[i][1] = true;
            break;
          }
        }
        shop.update();
        shop.changePage(0);
      }
    };
  }
  if (sorter) {
    sorter.onchange = (event) => {
      shop._storage.sort(event.target.selectedOptions[0].value);
      shop.update();
      shop.changePage(0);
    };
  }
}

function productEvents() {
  let catalog = document.querySelector(".category-products");

  catalog.addEventListener("click", (event) => {
    let button = event.target.classList.contains("add-to-cart") ? event.target :
      event.target.parentElement.classList.contains("add-to-cart") ? event.target.parentElement : false;

    if (button !== false) {
      let id = button.closest("[data-id]");

      if (id) {
        id = +id.dataset.id;
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

function showMoreEvents() {
  let showMore = document.querySelector("button.show-more");

  showMore.addEventListener("click", (event) => {
    shop.showMore();
  });
}

function paginationEvents() {
  let paginationList = document.querySelector(".pagination");

  if (paginationList !== undefined) {
    paginationList.addEventListener("click", (event) => {
      if (event.target.classList.contains("pagination-link")) {
        shop.changePage(+event.target.textContent - 1);
      }
      else if (event.target.dataset.elem || event.target.parentElement.dataset.elem) {
        let command = event.target.dataset.elem ? event.target.dataset.elem : event.target.parentElement.dataset.elem;

        if (command === "previous")
          shop.changePage(shop._catalog.currentPage() - 1);
        else if (command === "next")
          shop.changePage(shop._catalog.currentPage() + 1);
      }

    });
  }
}