"use strict";
function getData(value) {
    return value;
}
const data1 = getData(123);
const data2 = getData("123");
const data3 = getData(false);
const data4 = getData({ name: "123" });
console.log(data1);
console.log(data2);
console.log(data3);
console.log(data4);
// ====================
function getData2(value) {
    return value;
}
const data5 = getData2(123);
console.log(data5.toFixed(2));
const data6 = getData2("Fahmi");
console.log(data6.length);
