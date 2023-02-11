class ClassA {
  name: string = "ClassA";
}

class ClassB<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

const classA = new ClassA();
const classB = new ClassB<ClassA>(classA);

console.log(classB.value.name);
