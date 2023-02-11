interface Vehicle {
  name: string;
  year: number;
  broken?: boolean;
}

interface ICar extends Vehicle {
  doors: number;
  isElectric?: boolean;
}

class Civic implements ICar {
  name: string = "Civic";
  year: number = 2000;
  doors: number = 4;
}
