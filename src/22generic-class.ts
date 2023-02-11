interface GenericClass<T> {
  value: T;
  method(): T;
}

class GenericClass<T> implements GenericClass<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  method(): T {
    return this.value;
  }
}

const genericClass = new GenericClass<string>("Hello World");
console.log(genericClass.method());
