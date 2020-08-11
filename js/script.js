"use strict"

let productList = [
  {"id":0,"count":10,"name":"Cap","category":"clothes","price":1000},
  {"id":1,"count":3,"name":"Cap","category":"clothes","price":700},
  {"id":2,"count":0,"name":"Cap","category":"clothes","price":222},
  {"id":3,"count":5,"name":"Cap","category":"clothes","price":100},
  {"id":4,"count":8,"name":"Tesla Model S","category":"cars","price":200000,"image":"https://i0.wp.com/itc.ua/wp-content/uploads/2019/06/Tesla-Model-S-2gen.jpg?fit=1280%2C720&quality=100&strip=all&ssl=1"},
  {"id":6,"count":1,"name":"Tesla Model X","category":"cars","price":233303},
  {"id":5,"count":1,"name":"Tesla Model 3","category":"cars","price":170000}
];

let products = productList.map((product) => {
  return new Product(product.id, product.count, product.name, product.category, product.price, product.image);
});
let filters = [availableFilter];

let shop = new Shop(products, 3, filters);