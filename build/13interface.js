"use strict";
class Samsung {
    constructor(name) {
        this.name = name;
    }
    menu() {
        console.log("Menu Samsung");
    }
    home() {
        console.log("Home Samsung");
    }
    back() {
        console.log("Back Samsung");
    }
}
class GameA {
    constructor(phone) {
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
class Iphone {
    constructor(name) {
        this.name = name;
    }
    home() {
        console.log("Muncul Global");
    }
}
const iphone = new Iphone("Iphone 11");
const gameB = new GameA(iphone);
gameA.menu();
gameA.home();
gameA.back();
