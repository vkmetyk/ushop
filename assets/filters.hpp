#pragma once
#include <algorithm>
#include <functional>
#include "product.hpp"

class Filters {
    // array of pairs that contains function, that gets Product object and returns bool, and bool flag (is selected?)
    std::vector<std::pair<std::function<bool(Product)>, bool>> _filters;
public:
    Filters(std::vector<std::function<bool(Product)>> filters) {
        for (auto f : filters) {
            _filters.push_back({f, false});
        }
    }

    void update(int index) {
        auto &f = _filters[index]; // skip & in js code !!!
        f.second = !f.second; // reverse bool value
    }

    auto filters() {
        std::vector<std::function<bool(Product)>> result;

        for (auto [filter, flag] : _filters) {
            if (flag == true) {
                result.push_back(filter);
            }
        }

        return result;
    }
};
