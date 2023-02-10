class Hewan4 {
  nama: string;
  kaki: number;
  mamalia: boolean;

  constructor(nama: string, kaki: number, mamalia: boolean) {
    this.nama = nama;
    this.kaki = kaki;
    this.mamalia = mamalia;
  }
}

const hewan4 = new Hewan4(`Kucing`, 4, true);
console.log(hewan4);

// =========================================================

class Hewan41 {
  constructor(public nama: string, public kaki: number, public mamalia: boolean) {}
}

const hewan41 = new Hewan41(`kelinci`, 4, true);
console.log(hewan41);
