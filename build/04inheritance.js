"use strict";
class Hewan5 {
    constructor() {
        this.nama = ``;
        this.kaki = 0;
        this.mamalia = false;
    }
    bernafas() {
        console.log(`${this.nama} bernafas`);
    }
}
class Kucing extends Hewan5 {
    constructor() {
        super(...arguments);
        this.warna = `oren`;
    }
}
const kucing = new Kucing();
console.log(kucing);
kucing.nama = `Kucing`;
kucing.kaki = 4;
kucing.mamalia = true;
kucing.warna = `putih`;
console.log(kucing);
