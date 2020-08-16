"use strict"

async function getJson() {
  let result;
  let json = fetch("../assets/products.json")
    .then((resp) => resp.json())
    .then((data) => result = data.products);

  return Promise.resolve(json).then(() => {
    return result;
  });
}

async function getProducts(productList) {
  let json = await getJson();

  if (json) {
    return json;
  } else {
    return [
      {"id": 10000, "count": 1, "name": "Test (no image)", "category": "", "price": 0, "image": ""},
      {"id": 10001, "count": 0, "name": "Test (no image, count 0)", "category": "", "price": 0, "image": ""},
    ];
  }
}

function createShop(productList) {
  let products = productList.map((product) => {
    return new Product(product.id, product.count, product.name, product.category, product.price, product.image);
  });
  let filters = [availableFilter, priceFilter, nameFilter, categoryFilter];

  if (products && filters)
    return new Shop(products, 12, filters);
}

let shop;
let result = getProducts();
Promise.resolve(result).then((products) => {
  shop = createShop(products);
});
