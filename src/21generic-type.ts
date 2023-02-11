type GenericType<T> = T;
interface GenericInterface<T> {
  value: T;
}

function genericFunction<T>(value: T): GenericType<T> {
  return value;
}

console.log(genericFunction<string>("Hello World"));
