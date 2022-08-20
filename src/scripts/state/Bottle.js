export class Bottle {
  constructor(limit, name) {
    this.limit = limit;
    this.volume = limit;
    this.name = name;
  }

  notWater() {
    alert(`${this.name} is empty`);
  }

  giveWater() {
    this.volume = this.volume - 1;
  }
}

export const smallBottle = new Bottle(5, "BonAqua");
