"use strict";
function genericFunction(value) {
    // return { propA: value };
    // atau
    let data = {
        propA: value,
    };
    return data;
}
const data10 = genericFunction("Fahmi");
console.log(data10.propA.length);
console.log(genericFunction(123));
console.log(genericFunction(true));
console.log(genericFunction("Fahmi"));
