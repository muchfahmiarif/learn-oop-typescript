"use strict";
class ClassA {
    constructor() {
        this.name = "ClassA";
    }
}
class ClassB {
    constructor(value) {
        this.value = value;
    }
}
const classA = new ClassA();
const classB = new ClassB(classA);
console.log(classB.value.name);
