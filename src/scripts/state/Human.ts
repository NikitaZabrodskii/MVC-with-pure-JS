interface IHuman {
  name: string;
  limit: number;

  drinkWater(): void;
  niceWater(): void;
  enoughWater(): void;
}

class Human implements IHuman {
  volume = 0;
  name;
  limit;

  constructor(name: string, limit: number) {
    this.name = name;
    this.limit = limit;
  }

  drinkWater() {
    this.volume = this.volume + 1;
  }

  niceWater() {
    alert("say Nice water");
  }

  enoughWater() {
    alert("I dont want to drink anymore!");
  }
}

export const nikita = new Human("nikita", 3);
