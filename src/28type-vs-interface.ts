// type UserType = {
//   name: string;
//   age: number;
// };

// interface UserInterface {
//   name: string;
//   age: number;
// }

// class User1 implements UserInterface {
//   name: string = "John";
//   age: number = 30;
// }

// ======================= 1 =======================

// type berbentuk union
type Phone = string;
type PC = number;
// atau
type BBB = {
  name: string;
};

// interface berbentuk object
interface AAAA {
  name: string;
}

// ======================= 2 =======================

// interface bisa menggunakan nama yang sama
interface Dinosaurus {
  name: string;
}

interface Dinosaurus {
  age: number;
}

class Dino implements Dinosaurus {
  name: string;
  age: number;
}

// type tidak bisa menggunakan nama yang sama
type Dinosaurus2 = {
  name: string;
};

type Dinosaurus2 = {
  age: number;
};

// menggabungkan type dengan & atau | (union)
type Dinosaurus3 = {
  name: string;
};

type Dinosaurus4 = {
  age: number;
};

type Dinosaurus5 = Dinosaurus3 & Dinosaurus4;
type Dinosaurus6 = Dinosaurus3 | Dinosaurus4;

// ======================= 3 =======================

// interface bisa menggunakan extends
// type tidak bisa menggunakan extends

// ======================= 4 =======================

// interface bisa menggunakan implements
// type tidak bisa menggunakan implements

// ======================= 5 =======================

// pakai interface jika ingin membuat object baru atau method dari sebuah object
class implements interface

// pakai type jika ingin membuat variable atau function
let abcd: type
function abcd(): type
