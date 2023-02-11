class Store {
  private name: string = `Store A`;
  private profit: number = 2000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class FashionProduct {
  private store: Store;
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;

    this.store = new Store();
  }

  sell(): void {
    console.log(`Selling ${this.name} at ${this.price} from ${this.store.getProfit()}`);
  }
}

const product = new FashionProduct(`T-Shirt`, 100);
product.sell();

// ====================

interface IStore {
  name: string;
  profit: number;
  getProfit(): number;
}

class TokoLama implements IStore {
  name: string = `Toko Lama`;
  profit: number = 5000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class TokoBaru implements IStore {
  name: string = `Toko Baru`;
  profit: number = 10000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class TechProduct {
  private store: IStore;
  private name: string;
  private price: number;

  constructor(name: string, price: number, store: IStore) {
    this.name = name;
    this.price = price;
    this.store = store;
  }

  sell(): void {
    console.log(`Selling ${this.name} at ${this.price} from ${this.store.getProfit()}`);
  }
}

class FoodProduct {
  private store: IStore;
  private name: string;
  private price: number;

  constructor(name: string, price: number, store: IStore) {
    this.name = name;
    this.price = price;
    this.store = store;
  }

  sell(): void {
    console.log(`Selling ${this.name} at ${this.price} from ${this.store.getProfit()}`);
  }
}

const tokoLama = new TokoLama();
const tokoBaru = new TokoBaru();

const product1 = new TechProduct(`Laptop`, 1000000, tokoLama);
const product2 = new FoodProduct(`Bakso`, 10000, tokoBaru);

product1.sell();
product2.sell();
