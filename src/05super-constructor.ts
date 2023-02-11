class Hewan6 {
  nama: string;
  kaki: number;
  mamalia: boolean;

  constructor(nama: string, kaki: number, mamalia: boolean) {
    this.nama = nama;
    this.kaki = kaki;
    this.mamalia = mamalia;
  }
}

class Sapi extends Hewan6 {
  warna: string;

  constructor(nama: string, kaki: number, mamalia: boolean, warna: string) {
    super(nama, kaki, mamalia);
    this.warna = warna;
  }
}

const sapi = new Sapi(`Sapi`, 4, true, `putih - hitam`);
console.log(sapi);
