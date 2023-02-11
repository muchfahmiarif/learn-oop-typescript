"use strict";
function Generic24(value) {
    console.log(value.length);
    return value;
}
const generic24 = Generic24("Hello World");
console.log(generic24);
const generic24_2 = Generic24([1, 2, 3, 4, 5]);
console.log(generic24_2);
const generic24_3 = Generic24({ length: 10 });
console.log(generic24_3);
const generic24_4 = Generic24(10); // Error: Argument of type '10' is not assignable to parameter of type 'length'.
console.log(generic24_4);
