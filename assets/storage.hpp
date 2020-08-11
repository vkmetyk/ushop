#pragma once
#include <algorithm>
#include <vector>
#include "product.hpp"

class Storage {
    std::vector<Product> _products; // _products = [];
public:
    Storage(std::vector<Product> products) {
        _products = products;
    }
    auto products() {
        return _products;
    }

    void add(Product product) {
        auto it = std::find_if(_products.begin(), _products.end(), [product](auto p) {
            return product.compare(p);
        });

        if (it != _products.end()) {
            // if we already have this product in storage
            it->add(product.count());
        } else {
            // new product
            _products.push_back(product);
        }
    }
};
