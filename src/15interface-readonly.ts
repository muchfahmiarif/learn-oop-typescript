interface Student {
  readonly name: string;
  readonly age: number;
  readonly phone?: string;
}

let student: Student = {
  name: "Fahmi",
  age: 25,
};

student.name = "Fahmi Arif"; // Error: Cannot assign to 'name' because it is a read-only property.
