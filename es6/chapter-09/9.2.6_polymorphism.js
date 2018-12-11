// 자바스크립트는 느슨한 타입을 사용하고, 어디서든 객체를 쓸 수 있으므로 (정확한 결과가 보장되진 않지만),
// 어떤 면에서는 자바스크립트의 객체는 [모두 다형성을 갖고 있다]고 할 수 있습니다.

class Vehicle {
    constructor() {
        this.passengers = [];
        console.log("Vehicle created.");
    }
    addPassenger(p) {
        this.passengers.push(p);
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        console.log("Car created.");
    }
    deployAirbags() {
        console.log("BWOOSH!");
    }
}

class Motocycle extends Vehicle {}

const c = new Car();
const m = new Motocycle();

console.log(c instanceof Car);      // true
console.log(c instanceof Vehicle);  // true

console.log(m instanceof Car);      // false
console.log(m instanceof Motocycle);// true
console.log(m instanceof Vehicle);  // true