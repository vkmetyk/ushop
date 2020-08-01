#pragma once
#include <string>

class Product {
    // int id; maybe you need ID for simple comparing
    int _count = 0;
    std::string _name = "";
    std::string _manufacturer = "";
    // other fields

public:
    Product(int count, std::string name, std::string manufacturer) {
        _count = count;
        _name = name;
        _manufacturer = manufacturer;
    }

    int count() {
        return _count;
    }
    std::string name() {
        return _name;
    }
    std::string manufacturer() {
        return _manufacturer;
    }
    // other getters

    void buy(int count) {
        if (count > _count) {
            throw "ERROR";
        }
        _count -= count;
    }
    void add(int count) {
        _count += count;
    }
    // and NO other setters

    // just for adding new products in storage and cart classes
    bool compare(Product other) {
        return other._name == _name && other._manufacturer == _manufacturer; // && anonther fields ...
    }
};
