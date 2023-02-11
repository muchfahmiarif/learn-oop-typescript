"use strict";
class Ayam {
    static jalan() {
        console.log(`Ayam berjalan dengan ${this.kaki} kaki`);
    }
    getKaki() {
        // console.log(`Ayam ini punya ${this.kaki} kaki`); // error
        console.log(`Ayam ini punya ${Ayam.kaki} kaki`);
    }
}
Ayam.kaki = 2;
// kalo static property/method, bisa langsung diakses dari class
console.log(Ayam.jalan());
const ayam2 = new Ayam();
console.log(ayam2.getKaki());
