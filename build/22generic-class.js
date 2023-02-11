"use strict";
class GenericClass {
    constructor(value) {
        this.value = value;
    }
    method() {
        return this.value;
    }
}
const genericClass = new GenericClass("Hello World");
console.log(genericClass.method());
