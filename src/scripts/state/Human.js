class Human {
  volume = 0;

  constructor(name, limit) {
    this.name = name;
    this.limit = limit;
  }

  drinkWater() {
    this.volume = this.volume + 1;
  }

  niceWater() {
    alert(` ${this.name} say : nice water`);
  }

  enoughWater() {
    alert(`${this.name} I dont want to drink anymore!`);
  }
}

export const nikita = new Human("nikita", 5);
