#pragma once
#include <vector>
#include "product.hpp"

class Cart {
    std::vector<std::pair<Product, int>> _product_amount; // _product_amount = [];
public:
    void add(Product product) {
        auto it = std::find_if(_product_amount.begin(), _product_amount.end(), [product](auto p) {
            return product.compare(p.first);
        });

        if (it != _product_amount.end()) {
            // if we already have this product in cart
            if (product.count() < it->second) {
                it->second++;
            }
        } else {
            // new product
            _product_amount.push_back(std::make_pair(product, 1));
        }
    }

    void increase(int index) {
        if (_product_amount[index].first.count() < _product_amount[index].second) {
            _product_amount[index].second++;
        }
    }

    void decrease(int index) {
        _product_amount[index].second--;
        if (_product_amount[index].second < 1) {
            _product_amount.erase(_product_amount.begin() + index); // nevermind why here we call begin()
        }
    }
};
