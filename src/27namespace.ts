namespace NameSpaceExample {
  export class Hewan {
    constructor(public nama: string) {}
  }

  export const Kucing = new Hewan("Kucing");
}

const Ikan = new NameSpaceExample.Hewan("Ikan");
let kucingKecil = NameSpaceExample.Kucing;
