"use strict"

async function getProducts() {
  let response = await fetch("/ushop/assets/products.json")

  if (response.status == 200) {
    let json = await response.json();

    if (json?.products)
      return json.products;
  } else {
    return [
      {"id": 10000, "count": 1, "name": "Test (no image)", "category": "", "price": 0, "image": ""},
      {"id": 10001, "count": 0, "name": "Test (no image, count 0)", "category": "", "price": 0, "image": ""},
    ];
  }
}

async function createShop() {
  let productList = await getProducts();
  let products = productList.map((product) => {
    return new Product(product.id, product.count, product.name, product.category, product.price, product.image);
  });
  let filters = [availableFilter, priceFilter, nameFilter, categoryFilter];

  if (products && filters)
    return new Shop(products, 12, filters);
}

createShop();
