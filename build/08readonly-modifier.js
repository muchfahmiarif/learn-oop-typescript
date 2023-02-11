"use strict";
class Person {
    constructor() {
        // properti yang readonly tidak bisa diubah setelah diinisialisasi
        this.gender = `male`;
    }
}
const person = new Person();
// tidak bisa mengubah properti yang readonly
person.gender = `female`; // error
console.log(person);
/**
 * Perbedaan readonly dengan const
 * - const hanya bisa digunakan untuk variabel
 * - readonly bisa digunakan untuk properti
 */
