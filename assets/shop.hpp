#pragma once
#include "cart.hpp"
#include "storage.hpp"
#include "product.hpp"
#include "catalog.hpp"
#include "filters.hpp"

class Shop {
    Storage _storage;
    Catalog _catalog;
    Cart _cart;
    Filters _filters;
    int page_size = 0; // idk where this var should be (amount of products on one page)

public:
    // input products or json structure/file for parsing
    Shop(std::vector<Product> products, std::vector<std::function<bool(Product)>> filters)
        : _storage(products), _filters(filters) /* nevermind wtf is this */ {
        show(_catalog.page(0));
    }

    // on any event with filters
    void update() {
        _catalog.build(_storage.products(), page_size, _filters.filters());
    }

    // on any event with page number
    void change_page(int page) {
        show(_catalog.page(page));
    }

    // represent selected shop page
    void show(std::vector<Product> page) {
        // drawing code
    }
};
