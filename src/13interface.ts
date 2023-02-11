interface AndroidPhone {
  name: string;
  menu(): void;
  home(): void;
  back(): void;
}

class Samsung implements AndroidPhone {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  menu(): void {
    console.log("Menu Samsung");
  }

  home(): void {
    console.log("Home Samsung");
  }

  back(): void {
    console.log("Back Samsung");
  }
}

class GameA {
  private phone: AndroidPhone;

  constructor(phone: AndroidPhone) {
    this.phone = phone;
  }

  back() {
    console.log("Back Game A");
  }

  menu() {
    this.phone.menu();
  }

  home() {
    this.phone.home();
  }
}

const samsung = new Samsung("Samsung A5");
const gameA = new GameA(samsung);
gameA.menu();
gameA.home();
gameA.back();

//  ===========================

interface ApplePhone {
  home(): void;
}

class Iphone implements ApplePhone {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  home(): void {
    console.log("Muncul Global");
  }
}

const iphone = new Iphone("Iphone 11");
const gameB = new GameA(iphone);
gameA.menu();
gameA.home();
gameA.back();
