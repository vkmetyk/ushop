"use strict"

let productList = [
  {"id":0,"count":20,"name":"Ноутбук HP Pavilion Notebook 15-cw1005ua (7ZF75EA) Mineral Silver","category":"Ноутбуки","price":16999,"image":"https://i2.rozetka.ua/goods/16600299/copy_hp_8bp47ea_5e306dd74eedc_images_16600299864.jpg"},
  {"id":1,"count":30,"name":"Ноутбук HP Pavilion Notebook 15-bc532ur (7NG09EA) Shadow Black","category":"Ноутбуки","price":17444,"image":"https://i1.rozetka.ua/goods/15141351/copy_hp_4jt90ea_5dcd89c07aebc_images_15141351223.jpg"},
  {"id":2,"count":13,"name":"Ноутбук Asus X509FL-BQ293 (90NB0N12-M03830) Slate Grey","category":"Ноутбуки","price":16999,"image":"https://i2.rozetka.ua/goods/17989035/copy_asus_90nb0mz2_m12470_5ea6c5389da9e_images_17989035025.jpg"},
  {"id":3,"count":50,"name":"Ноутбук Acer Aspire 5 A515-54G-502N (NX.HVGEU.006) Pure Silver","category":"Ноутбуки","price":18999,"image":"https://i2.rozetka.ua/goods/18137140/copy_acer_nx_hn5eu_00j_5eb3cfb04a2ec_images_18137140543.jpg"},
  {"id":4,"count":102,"name":"Ноутбук Apple MacBook Pro 13\" A2289 Retina 512GB 2020 (MXK72UA/A) Silver","category":"Ноутбуки","price":49999,"image":"https://i2.rozetka.ua/goods/18102019/copy_apple_mxk62ua_a_5eb196a539458_images_18102019915.jpg"},
  {"id":5,"count":81,"name":"Телевізор Panasonic TX-24GR300","category":"Телевізори","price":2799,"image":"https://i8.rozetka.ua/goods/14634791/copy_panasonic_tx_43gr300_5db03580c2a01_images_14634791051.jpg"},
  {"id":6,"count":74,"name":"Телевізор TCL 50EP640","category":"Телевізори","price":10999,"image":"https://i1.rozetka.ua/goods/12848722/copy_tcl_43ep640_5d2438274ab68_images_12848722854.jpg"},
  {"id":7,"count":27,"name":"Телевізор Samsung QE65Q80TAUXUA","category":"Телевізори","price":64999,"image":"https://i2.rozetka.ua/goods/17603513/copy_samsung_qe55q80tauxua_5e8344a53b665_images_17603513587.jpg"},
  {"id":8,"count":38,"name":"Телевізор Sharp LC-43UI7352E","category":"Телевізори","price":8499,"image":"https://i2.rozetka.ua/goods/12544869/sharp_lc_43ui7352e_images_12544869478.jpg"},
  {"id":9,"count":50,"name":"Телевізор Kivi 50U600GU + Кредит на 24 міс!","category":"Телевізори","price":8999,"image":"https://i8.rozetka.ua/goods/15744931/kivi_40f600g_images_15744931399.jpg"},
  {"id":10,"count":154,"name":"Планшет Apple iPad Pro 12.9\" Wi-Fi 64GB Space Gray 2018 (MTEL2RK/A)","category":"Планшети","price":28999,"image":"https://i8.rozetka.ua/goods/17206439/apple_mtel2_images_17206439209.jpg"},
  {"id":11,"count":52,"name":"Планшет Lenovo Tab M10 Plus FHD LTE 32GB Iron Grey (ZA5V0046UA)","category":"Планшети","price":0,"image":"https://i8.rozetka.ua/goods/18889203/copy_lenovo_za5v0111ua_5efb3e2cb526d_images_18889203877.jpg"},
  {"id":12,"count":28,"name":"Планшет Apple iPad 10.2\" Wi-Fi 32GB Gold (MW762)","category":"Планшети","price":10999,"image":"https://i2.rozetka.ua/goods/17133461/191085602_images_17133461591.jpg"},
  {"id":13,"count":45,"name":"Планшет Samsung Galaxy Tab S7 LTE 128 GB Mystic Black (SM-T875NZKASEK)","category":"Планшети","price":23999,"image":"https://i2.rozetka.ua/goods/19494463/samsung_sm_t875nzkasek_images_19494463567.jpg"},
  {"id":14,"count":76,"name":"Планшет Lenovo Tab E7 1/16 3G Slate Black (ZA410066UA)","category":"Планшети","price":1999,"image":"https://i1.rozetka.ua/goods/7924961/copy_lenovo_tab_e7_za410016ua_5bbdbacf249ff_images_7924961589.jpg"},
  {"id":15,"count":184,"name":"Камера миттєвого друку Canon Zoemini S Rose Gold (3879C007AA)","category":"Фотоапарати","price":5299,"image":"https://i1.rozetka.ua/goods/12351779/canon_3879c007aa_images_12351779480.jpg"},
  {"id":16,"count":20,"name":"Фотоапарат Canon PowerShot G7 X Mark II Офіційна гарантія! (1066C012AA)","category":"Фотоапарати","price":16599,"image":"https://i2.rozetka.ua/goods/1797905/canon_powershot_g7_x_mark_ii_images_1797905265.jpg"},
  {"id":17,"count":50,"name":"Камера миттєвого друку Fujifilm Instax Mini 11 Ice White (16654982)","category":"Фотоапарати","price":2349,"image":"https://i8.rozetka.ua/goods/17698669/fujifilm_16654982_images_17698669867.jpg"},
  {"id":18,"count":89,"name":"Камера миттєвого друку Fujifilm Instax SQ 6 Ruby Red","category":"Фотоапарати","price":4299,"image":"https://i2.rozetka.ua/goods/13916068/fujifilm_16608684_images_13916068594.jpg"},
  {"id":19,"count":91,"name":"Камера миттєвого друку Fujifilm Instax Mini Liplay Elegant Black","category":"Фотоапарати","price":5499,"image":"https://i1.rozetka.ua/goods/13916121/fujifilm_16631801_images_13916121832.jpg"},
  {"id":20,"count":7,"name":"Фотоапарат Sony Alpha 7RM4 Body (ILCE7RM4B.CEC) Офіційна гарантія!","category":"Фотоапарати","price":99999,"image":"https://i2.rozetka.ua/goods/15310732/sony_ilce7rm4b_cec_images_15310732207.jpg"},
  {"id":21,"count":192,"name":"Камера миттєвого друку Canon Zoemini C Bubblegum Pink (3884C005AA)","category":"Фотоапарати","price":3299,"image":"https://i2.rozetka.ua/goods/12351306/3884C005AA_images_12351306596.jpg"},
  {"id":22,"count":21,"name":"Фотоапарат Olympus PEN E-PL9 14-42mm Kit White","category":"Фотоапарати","price":13749,"image":"https://i8.rozetka.ua/goods/16743143/olympus_pen_e_pl8_14_42mm_kit_white_images_16743143460.jpg"},
  {"id":10000,"count":1,"name":"Test (no image)","category":"","price":0,"image":""},
  {"id":10001,"count":0,"name":"Test (no image, count 0)","category":"","price":0,"image":""},
];

let products = productList.map((product) => {
  return new Product(product.id, product.count, product.name, product.category, product.price, product.image);
});
let filters = [availableFilter, priceFilter, nameFilter, categoryFilter];

let shop = new Shop(products, 12, filters);