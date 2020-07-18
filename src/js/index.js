const board = document.getElementById("board");

// factory pattern
class Car {
  constructor(doors, brand, price) {
    this.doors = doors;
    this.brand = brand;
    this.price = price;
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
console.log(fordTruck, civic);

// const factory = new CarFactory();
// const corolla = factory.createCar("corolla");
// const civic = factory.createCar("civic");
// console.log(corolla);
// console.log(civic);
