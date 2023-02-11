interface Product {
  sell(): void;
}

class CarProduct implements Product {
  sell(): void {
    console.log("Car sold");
  }
}

class HouseProduct implements Product {
  sell(): void {
    console.log("House sold");
  }
}

function sellProdcut<T extends Product>(product: T[]): void {
  product.forEach((product) => product.sell());
}

const carProduct = new CarProduct();
const houseProduct = new HouseProduct();

sellProdcut([carProduct, houseProduct]);
