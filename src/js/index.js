const board = document.getElementById("board");

// factory pattern
class Car {
  actions = [];
  constructor(doors, brand, price, gas = 100) {
    this.doors = doors;
    this.brand = brand;
    this.price = price;
    this.gas = gas;
  }

  setGasLevel(val) {
    this.gas = val;
    this.notifyAll();
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions.filter((element) => {
      return element !== observer;
    });
  }

  actionIterator() {
    for (let action of this.actions) {
      console.log(action);
    }
  }

  notifyAll() {
    return this.actions.forEach(
      function (element) {
        element.update(this);
      }.bind(this)
    );
  }
}

class CarFactory {
  createCar(name) {
    switch (name) {
      case "civic":
        return new Car(4, "honda", "18000");
      case "corolla":
        return new Car(4, "toyota", "17000");
    }
  }
}

class TruckFactory {
  createCar(name) {
    switch (name) {
      case "f150":
        return new Car(4, "ford", "28000");
      case "tundra":
        return new Car(4, "toyota", "37000");
    }
  }
}

let carMixin = {
  revEngine: function () {
    console.log(`The ${this.brand} is doing Zoom Zoom`);
  },
};
// copy the methods
Object.assign(Car.prototype, carMixin);

const autoManufacturer = (type, model) => {
  const carFactory = new CarFactory();
  const truckFactory = new TruckFactory();
  switch (type) {
    case "truck":
      return truckFactory.createCar(model);
    case "car":
      return carFactory.createCar(model);
  }
};

const fordTruck = autoManufacturer("truck", "f150");
const civic = autoManufacturer("car", "civic");
console.log(fordTruck, civic, carMixin);
civic.revEngine();

// const factory = new CarFactory();
// const corolla = factory.createCar("corolla");
// const civic = factory.createCar("civic");
// console.log(corolla);
// console.log(civic);
