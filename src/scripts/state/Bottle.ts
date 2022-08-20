export interface IBottle {
  limit: number;
  name: string;

  notWater(): void;

  giveWater(): void;
}

export class Bottle implements IBottle {
  limit;
  volume;
  name;
  constructor(limit: number, name: string) {
    this.limit = limit;
    this.volume = limit;
    this.name = name;
  }

  notWater() {
    alert("Bottle is empty");
  }

  giveWater() {
    this.volume = this.volume - 1;
  }
}

export const smallBottle = new Bottle(4, "BonAqua");
