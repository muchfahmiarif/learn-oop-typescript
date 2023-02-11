"use strict";
class Hewan9 {
    constructor(name) {
        this.name = name;
    }
    makan() {
        console.log(`${this.name} makan`);
    }
}
class Kucing9 extends Hewan9 {
    bergerak() {
        console.log("Kucing berjalan");
    }
    constructor() {
        super("Kucing");
    }
}
class Burung9 extends Hewan9 {
    bergerak() {
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
