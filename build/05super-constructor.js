"use strict";
class Hewan6 {
    constructor(nama, kaki, mamalia) {
        this.nama = nama;
        this.kaki = kaki;
        this.mamalia = mamalia;
    }
}
class Sapi extends Hewan6 {
    constructor(nama, kaki, mamalia, warna) {
        super(nama, kaki, mamalia);
        this.warna = warna;
    }
}
const sapi = new Sapi(`Sapi`, 4, true, `putih - hitam`);
console.log(sapi);
