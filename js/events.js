"use strict"

function addEvents() {
  cartEvents();
  filterEvents();
  productEvents();
  showMoreEvents();
  paginationEvents();
  additionEvents();
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
            shop._cart.increase(shop._catalog.getProduct(+productId));
          }
          else if (ourEvent === "decrease") {
            shop._cart.decrease(shop._catalog.getProduct(+productId));
          }
          else if (ourEvent === "remove") {
            shop._cart.remove(shop._catalog.getProduct(+productId));
          }
        }
      }
    };
  }
}

function filterEvents() {
  let available = document.querySelector("#availability-input");
  let searchInput = document.querySelector(".search-input");
  let search = document.querySelector(".search-button");
  let sorter = document.querySelector(".select-css");
  let priceFilterButton = document.querySelector("[data-event=\"price_filter\"]");
  let priceFilterMin = document.querySelector("[data-event=\"min_price\"]");
  let priceFilterMax = document.querySelector("[data-event=\"max_price\"]");
  let categoryFilterBlock = document.querySelectorAll("#category-pick-block input");

  if (available) {
    available.onclick = (event) => {
      shop._filters.update(availableFilter, available.checked);
      shop.update();
      shop.changePage(0, true);
    };
  }
  if (searchInput) {
    searchInput.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        changeNameFilter(event.target.value.trim());
      }
    });
  }
  if (search) {
    search.onclick = (event) => {
      let input = event.target?.parentElement?.parentElement?.querySelector(".search-input");

      if (input) {
        changeNameFilter(input.value.trim());
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
  if (priceFilterButton)
    priceFilterButton.onclick = (event) => changeMinMax();
  if (priceFilterMin && priceFilterMax) {
    priceFilterMin.addEventListener("keyup", (event) => {
      if (event.keyCode === 13)
        priceFilterMax.focus();
    });
    priceFilterMax.addEventListener("keyup", (event) => {
      if (event.keyCode === 13)
        changeMinMax();
    });
  }
  if (categoryFilterBlock) {
    for (let inputElem of categoryFilterBlock)
      inputElem.onchange = (event) => {
        if (shop?._filters._categories.has(inputElem.value)) {
          if (inputElem.checked) {
            shop._filters.update(categoryFilter, true);
            shop._filters._categories.set(inputElem.value, true);
          }
          else {
            let categoryHas = false;

            shop._filters._categories.set(inputElem.value, false);
            for (let value of shop._filters._categories.values())
              if (value === true) {
                categoryHas = true;
                break;
              }
            categoryHas === false ? shop._filters.update(categoryFilter, false) : 0;
          }
          shop.update();
          shop.changePage(0, true);
        }
        if (inputElem.checked && shop?._filters._categories.has(inputElem.value))
          shop._filters._categories.set(inputElem.value, true);
        else if (inputElem.checked === false && shop?._filters._categories.has(inputElem.value))
          shop._filters._categories.set(inputElem.value, false);
      };
  }
}

function changeMinMax() {
  let min = +document.querySelector("[data-event=\"min_price\"]")?.value;
  let max = +document.querySelector("[data-event=\"max_price\"]")?.value;

  if (isNaN(min) === false && isNaN(max) === false && shop) {
    shop?._filters._filters.forEach((filter) => {
      if (filter[0] === priceFilter) {
        shop._filters._minPrice = min;
        shop._filters._maxPrice = max;
        filter[1] = true;
        shop.update();
        shop.changePage(0, true);
      }
    });
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
          button.querySelector("img").src = "/ushop/assets/images/added-to-cart.png";
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

function additionEvents() {
  let goToTop = document.querySelectorAll("[data-event=\"go_to_top\"]");

  for (let button of goToTop)
    button.onclick = (e) => {
      window.scrollBy({
          left: 0,
          top: -window.scrollY,
          behavior: 'smooth'
      });
    }
}
