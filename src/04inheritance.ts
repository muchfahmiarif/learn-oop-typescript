class Hewan5 {
  nama: string = ``;
  kaki: number = 0;
  mamalia: boolean = false;

  bernafas() {
    console.log(`${this.nama} bernafas`);
  }
}

class Kucing extends Hewan5 {
  warna: string = `oren`;
}

const kucing = new Kucing();
console.log(kucing);

kucing.nama = `Kucing`;
kucing.kaki = 4;
kucing.mamalia = true;
kucing.warna = `putih`;
console.log(kucing);
