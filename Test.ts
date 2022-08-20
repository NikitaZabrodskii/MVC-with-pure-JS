class Human {
  private name;
  bottle;
  constructor(name, bottle) {
    this.name = name;

    this.bottle = bottle;
  }

  drinkWater() {
    if (this.bottle.volume >= 2) {
      this.bottle.volume = this.bottle.volume - 2;
    } else {
      console.log("no water anymore");
    }
  }
}

class Bottle {
  limit;
  volume;
  constructor(limit) {
    this.limit = limit;
    this.volume = limit;
  }

  drinkWater() {
    if (this.volume >= 2) {
      this.volume = this.volume - 2;
    } else {
      console.log("Not enough water!");
    }
  }
}

const miska = new Bottle(10);

const nikita = new Human("nikita", miska);

nikita.drinkWater();

console.log(nikita);
