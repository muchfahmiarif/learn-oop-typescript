"use strict";
class CarProduct {
    sell() {
        console.log("Car sold");
    }
}
class HouseProduct {
    sell() {
        console.log("House sold");
    }
}
function sellProdcut(product) {
    product.forEach((product) => product.sell());
}
const carProduct = new CarProduct();
const houseProduct = new HouseProduct();
sellProdcut([carProduct, houseProduct]);
