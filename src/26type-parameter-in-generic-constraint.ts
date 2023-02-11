function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

console.log(getProperty(x, "a")); // okay
console.log(getProperty(x, "b"));
console.log(getProperty(x, "m")); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
