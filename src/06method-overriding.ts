class Hewan7 {
  nama: string = ``;
  kaki: number = 0;

  berjalan() {
    console.log(`sedang berjalan`);
  }
}

class Semut extends Hewan7 {
  berjalan() {
    console.log(`sedang berjalan dengan cepat`);
  }
}

const semut = new Semut();
semut.berjalan();
