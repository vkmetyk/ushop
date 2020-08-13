"use strict"

let productList = [
  {"id":0,"count":10,"name":"Cap","category":"clothes","price":1000},
  {"id":1,"count":3,"name":"Cap","category":"clothes","price":700},
  {"id":2,"count":0,"name":"Cap","category":"clothes","price":222},
  {"id":3,"count":5,"name":"Cap","category":"clothes","price":100},
  {"id":4,"count":8,"name":"Tesla Model S","category":"cars","price":200000,"image":"https://i0.wp.com/itc.ua/wp-content/uploads/2019/06/Tesla-Model-S-2gen.jpg?fit=1280%2C720&quality=100&strip=all&ssl=1"},
  {"id":6,"count":1,"name":"Tesla Model X","category":"cars","price":233303},
  {"id":7,"count":0,"name":"Cap","category":"clothes","price":222},
  {"id":8,"count":5,"name":"Cap","category":"clothes","price":100},
  {"id":9,"count":8,"name":"Tesla Model S","category":"cars","price":200000,"image":"https://i0.wp.com/itc.ua/wp-content/uploads/2019/06/Tesla-Model-S-2gen.jpg?fit=1280%2C720&quality=100&strip=all&ssl=1"},
  {"id":10,"count":1,"name":"Tesla Model X","category":"cars","price":233303},
  {"id":11,"count":0,"name":"Cap","category":"clothes","price":222},
  {"id":12,"count":5,"name":"Cap","category":"clothes","price":100},
  {"id":13,"count":8,"name":"Tesla Model S","category":"cars","price":200000,"image":"https://i0.wp.com/itc.ua/wp-content/uploads/2019/06/Tesla-Model-S-2gen.jpg?fit=1280%2C720&quality=100&strip=all&ssl=1"},
  {"id":14,"count":1,"name":"Tesla Model X","category":"cars","price":233303},
  {"id":15,"count":0,"name":"Cap","category":"clothes","price":222},
  {"id":16,"count":5,"name":"Cap","category":"clothes","price":100},
  {"id":18,"count":8,"name":"Tesla Model S","category":"cars","price":200000,"image":"https://i0.wp.com/itc.ua/wp-content/uploads/2019/06/Tesla-Model-S-2gen.jpg?fit=1280%2C720&quality=100&strip=all&ssl=1"},
  {"id":22,"count":1,"name":"Tesla Model X","category":"cars","price":233303},
  {"id":32,"count":1,"name":"Tesla Model 3","category":"cars","price":170000}
];

let products = productList.map((product) => {
  return new Product(product.id, product.count, product.name, product.category, product.price, product.image);
});
let filters = [availableFilter, priceFilter, nameFilter, categoryFilter];

let shop = new Shop(products, 12, filters);