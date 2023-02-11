"use strict";
var NameSpaceExample;
(function (NameSpaceExample) {
    class Hewan {
        constructor(nama) {
            this.nama = nama;
        }
    }
    NameSpaceExample.Hewan = Hewan;
    NameSpaceExample.Kucing = new Hewan("Kucing");
})(NameSpaceExample || (NameSpaceExample = {}));
const Ikan = new NameSpaceExample.Hewan("Ikan");
let kucingKecil = NameSpaceExample.Kucing;
