#pragma once
#include <algorithm>
#include <vector>
#include <functional>
#include "product.hpp"

class Catalog {
    std::vector<std::vector<Product>> _pages;
    int _current_page = 0;
public:
    void build(std::vector<Product> products, int page_size, std::vector<std::function<bool(Product)>> filters) {
        _pages.clear(); // clear all data from all pages
        _pages.emplace_back(); // add vector for first page
        _current_page = 0;
        int size = 0;

        for (auto p : products) {
            // all_of is cycle by every filter and use it with Product p
            // if all of filters return true - than p is shown at page
            if (std::all_of(filters.begin(), filters.end(), [p](std::function<bool(Product)> filter) {
                return filter(p);
            })) {
                _pages[_current_page].push_back(p);
                size++;

                if (size >= page_size) {
                    _current_page++;
                    size = 0;
                }
            }
        }
    }

    auto page(int index) {
        return _pages[index];
    }
};
