interface GenericInterface<T> {
  propA: T;
}

function genericFunction<T>(value: T): GenericInterface<T> {
  // return { propA: value };

  // atau

  let data: GenericInterface<T> = {
    propA: value,
  };
  return data;
}

const data10 = genericFunction<string>("Fahmi");
console.log(data10.propA.length);

console.log(genericFunction<number>(123));
console.log(genericFunction<boolean>(true));
console.log(genericFunction<string>("Fahmi"));
