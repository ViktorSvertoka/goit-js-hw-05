// # Завдання 5

// Напиши клас `Car` із зазначеними властивостями і методами.

// ```js
// class Car {
//   /*
//    * Додай статичний метод `getSpecs(car)`,
//    * який приймає об'єкт-машину як параметр і виводить
//    * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
//    */

//   /*
//    * Конструктор отримує об'єкт налаштувань.
//    *
//    * Додай властивості майбутнього екземпляра класу:
//    *  speed - поточна швидкість, початкова 0
//    *  price - ціна автомобіля
//    *  maxSpeed - максимальна швидкість
//    *  isOn - заведений автомобіль, значення true або false. Спочатку false
//    *  distance - загальний кілометраж, спочатку 0
//    */
//   constructor() {}

//   /*
//    * Додай геттер і сеттер для властивості price,
//    * який буде працювати з властивістю ціни автомобіля.
//    */

//   /*
//    * Додай код для того, щоб завести автомобіль
//    * Записує у властивість isOn значення true
//    */
//   turnOn() {}

//   /*
//    * Додай код для того, щоб заглушити автомобіль
//    * Записує у властивість isOn значення false,
//    * і скидає поточну швидкість в 0
//    */
//   turnOff() {}

//   /*
//    * Додає до властивості speed отримане значення,
//    * за умови, що результуюча швидкість
//    * не більше, ніж значення властивості maxSpeed
//    */
//   accelerate(value) {}

//   /*
//    * Забирає від властивості speed отримане значення,
//    * за умови, що результуюча швидкість не менше нуля
//    */
//   decelerate(value) {}

//   /*
//    * Додає в поле distance кілометраж (hours * speed),
//    * але тільки в тому випадку, якщо машина заведена!
//    */
//   drive(hours) {}
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
// ```

class Car {
  static getSpecs({ maxSpeed, speed, isOn, distance, price }) {
    console.log(maxSpeed, speed, isOn, distance, price);
  }

  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this.price = price;
  }

  get price() {
    return this._price;
  }

  set price(sum) {
    return (this._price = sum);
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    }
  }

  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
    }
  }

  drive(hours) {
    if (this.isOn === true) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
