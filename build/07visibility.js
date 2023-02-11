"use strict";
// public = bisa diakses dari mana saja
// private = hanya bisa diakses dari class itu sendiri
// protected = hanya bisa diakses dari class itu sendiri dan class turunannya
class Hewan8 {
    constructor(nama, kaki, mamalia) {
        this.nama = nama;
        this.kaki = kaki;
        this.mamalia = mamalia;
    }
    bergerak() {
        console.log(`${this.nama} bergerak dengan ${this.kaki} kaki dan mamalia: ${this.mamalia}`);
    }
}
class Burung extends Hewan8 {
    constructor() {
        super(...arguments);
        this.umurTelur = 4;
    }
    getUmurTelur() {
        console.log(`umur telur: ${this.umurTelur}`);
        this.nama = `burung`;
        // this.kaki = 2; // error
        this.mamalia = false;
    }
}
const burung = new Burung(`burung`, 2, false);
// tidak bisa mengakses properti private yaitu umurTelur
burung.getUmurTelur();
console.log(burung);
