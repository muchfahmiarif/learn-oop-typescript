"use strict";
class Store {
    constructor() {
        this.name = `Store A`;
        this.profit = 2000;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class FashionProduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.store = new Store();
    }
    sell() {
        console.log(`Selling ${this.name} at ${this.price} from ${this.store.getProfit()}`);
    }
}
const product = new FashionProduct(`T-Shirt`, 100);
product.sell();
class TokoLama {
    constructor() {
        this.name = `Toko Lama`;
        this.profit = 5000;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class TokoBaru {
    constructor() {
        this.name = `Toko Baru`;
        this.profit = 10000;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class TechProduct {
    constructor(name, price, store) {
        this.name = name;
        this.price = price;
        this.store = store;
    }
    sell() {
        console.log(`Selling ${this.name} at ${this.price} from ${this.store.getProfit()}`);
    }
}
class FoodProduct {
    constructor(name, price, store) {
        this.name = name;
        this.price = price;
        this.store = store;
    }
    sell() {
        console.log(`Selling ${this.name} at ${this.price} from ${this.store.getProfit()}`);
    }
}
const tokoLama = new TokoLama();
const tokoBaru = new TokoBaru();
const product1 = new TechProduct(`Laptop`, 1000000, tokoLama);
const product2 = new FoodProduct(`Bakso`, 10000, tokoBaru);
product1.sell();
product2.sell();
