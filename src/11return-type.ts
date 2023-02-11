class Elang {
  private kaki: number = 2;

  // Method ini akan mengembalikan nilai number
  getKaki(): number {
    return this.kaki;
  }

  // Method ini tidak mengembalikan nilai
  terbang(): void {
    console.log("Terbang");
  }

  // Pada async function, kita bisa menambahkan return type Promise
  async makan(): Promise<string> {
    return "Makan";
  }
}
