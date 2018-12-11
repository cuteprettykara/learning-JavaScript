// 정적 메소드(클래스 메소드)에서 this는 인스턴스가 아니라 클래스 자체에 묶입니다.
// 하지만 일반적으로 정적 메소드에는 this 대신 클래스 이름을 사용하는 것이 좋은 습관입니다.

// 정적 메소드는 클래스에 관련되지만, [인스턴스와는 상관이 없는] [범용적]인 작업에 사용됩니다.
// ex) 자동차 식별번호(VIN)를 붙이는 메소드

// 정적 메소드는 여러 인스턴스를 대상으로 하는 작업에도 종종 쓰입니다.
// ex) 두 자동차의 제조사와 모델이 모두 같으면 true를 반환하는 areSimilar 메소드,
// ex) 두 자동차의 VIN이 같으면  true를 반환하는 areSame 메소드

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.vin = Car.getNextVin();
    }
    static getNextVin() {
        // this.nextVin++ 라고 써도 되지만, Car를 앞에 쓰면 정적 메소드라는 점을 상기하기 쉽습니다.
        return Car.nextVin++;
    }
    static areSimilar(car1, car2) {
        return car1.make === car2.make && car1.model === car2.model;
    }
    static areSame(car1, car2) {
        return car1.vin === car2.vin;
    }
}
Car.nextVin = 0;

const car1 = new Car("Tesla", "S");
const car2 = new Car("Mazda", "3");
const car3 = new Car("Mazda", "3");

console.log(car1.vin);  // 0
console.log(car2.vin);  // 1
console.log(car3.vin);  // 2

console.log(Car.areSimilar(car1, car2)); // false
console.log(Car.areSimilar(car2, car3)); // true

console.log(Car.areSame(car2, car3)); // false
console.log(Car.areSame(car2, car2)); // true