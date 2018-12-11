// 모든 객체는 Object을 상속하므로, Object의 메소드는 모든 객체에서 사용할 수 있습니다.
// toString도 그런 메소드 중 하나입니다.
// toString의 기본 동작은 "[object Object]"를 반환하는 것인데, 이건 거의 쓸모가 없습니다.
// Car 클래스의 toString 메소드가 제조사, 모델, VIN을 반환하도록 고쳐봅시다.
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
    toString() {
        return `${this.make} ${this.model}: ${this.vin}`;
    }
}
Car.nextVin = 0;

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");

console.log(car1.toString());
console.log(car2.toString());

