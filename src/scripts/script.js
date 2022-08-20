import { nikita } from "./state/Human.js";
import { smallBottle } from "./state/Bottle.js";

class Model {
  constructor(human, bottle) {
    this.human = human;
    this.bottle = bottle;
  }

  /// set new Method for callback
  bindVolumeChaged(callback) {
    this.onVolumeChanged = callback;
  }

  humanDrinkWater() {
    this.human.drinkWater();
    this.bottle.giveWater();
    this.onVolumeChanged(this.human, this.bottle);
  }
}

class View {
  constructor() {
    this.humanContent = this.getElement(".HumanVolume");
    this.bottleContent = this.getElement(".BottleVolume");

    this.btn = this.getElement(".Btn");

    this.titleHuman = this.createElement("h1");
    this.titleBottle = this.createElement("h1");
    this.volumeHuman = this.createElement("h1", "VolumeHuman");
    this.volumeBottle = this.createElement("h1", "VolumeBottle");

    this.humanContent.append(this.titleHuman, this.volumeHuman);
    this.bottleContent.append(this.titleBottle, this.volumeBottle);
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  getAllElements(selector) {
    const element = document.querySelectorAll(selector);

    return element;
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
  }

  bindDrinkWater(handler) {
    this.btn.addEventListener("click", () => {
      handler();
    });
  }

  displayVolume(human, bottle) {
    if (this.titleHuman.innerText === human.name) {
      null;
    } else {
      this.titleHuman.innerText = human.name;
      this.titleBottle.innerText = bottle.name;
    }

    this.volumeHuman.textContent = human.volume;
    this.volumeBottle.textContent = bottle.volume;
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bindDrinkWater(this.drinkWater);
    this.model.bindVolumeChaged(this.onVolumeChanged);
    this.onVolumeChanged(this.model.human, this.model.bottle);
  }

  onVolumeChanged = (human, bottle) => {
    this.view.displayVolume(human, bottle);
  };

  drinkWater = () => {
    if (
      this.model.bottle.volume > 0 &&
      this.model.human.volume < this.model.human.limit
    ) {
      this.model.humanDrinkWater();
      this.model.human.niceWater();
    } else if (this.model.bottle.volume === 0) {
      this.model.bottle.notWater();
    } else if (this.model.human.volume === this.model.human.limit) {
      this.model.human.enoughWater();
    }
  };
}

const app = new Controller(new Model(nikita, smallBottle), new View());
