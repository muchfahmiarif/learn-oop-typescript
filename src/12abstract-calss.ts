abstract class Hewan9 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makan(): void {
    console.log(`${this.name} makan`);
  }

  abstract bergerak(): void;
}

class Kucing9 extends Hewan9 {
  bergerak(): void {
    console.log("Kucing berjalan");
  }
  constructor() {
    super("Kucing");
  }
}

class Burung9 extends Hewan9 {
  bergerak(): void {
    console.log("Burung terbang");
  }
  constructor() {
    super("Burung");
  }
}

const kucing9 = new Kucing9();
kucing9.bergerak();

const burung9 = new Burung9();
burung9.bergerak();
