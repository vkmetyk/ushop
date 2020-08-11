"use strict"

// class Product {
//   _count = 0;
//   _title = "";
//   _desc = "";
//   _category = "";
//   _price = 0;
//   _image = "./assets/images/default.png";
//
//   constructor(count, title, desc, category, price, image) {
//     this._count = count;
//     this._title = title;
//     this._desc = desc;
//     categories.set(category, +(categories.get(category) ?? 0) + 1);
//     this._category = category;
//     this._price = price;
//     this._image = image;
//   }
//
//   is_available() {
//     return this._count !== 0;
//   }
//
//   buying_update(count) {
//     this._count -= count;
//   }
// }
//
// class Storage {
//   _products = [];
//
//   constructor() {
//
//   }
//
//   // filters - массив функций, которые возвращают bool: true = если товар соответствует фильтру
//   // get_products(...filters) {
//   // возвращает массив ссылок на товары, которые прошли фильтрацию
//   // let result = this._products;
//   //
//   // result.forEach((p) => {
//   //   for (let i = 0; i < filters.length; i++) {
//   //      if (filters[i](p) === false) {
//   //         result.remove(p);
//   //         break;
//   //      }
//   //   }
//   // });
//   // return result;
//   // }
// }
//
// class Catalog {
//   _products = [];
//
//   constructor() {
//
//   }
//
//   paginate() {
//     this._products = get_products();
//
//   }
//
//   reset() {
//     this._products = [];
//     //  view logic
//   }
// }
//
// class Cart {
//   _products = [];
//
//   constructor() {
//
//   }
// }
//
// let categories = new Map();
//
// let item = new Product(5, "Mouse", "mouse for computer", "computer", 120, "./assets/images/mouse_image.jpeg");
//
// console.dir(item);
