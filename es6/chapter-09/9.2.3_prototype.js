// 클래스의 인스턴스에서 사용할 수 있는 메소드라고 하면 그건 프로토타입 메소드를 말합니다.
// 프로토타입 메소드는 Car.prototype.shift처럼 표기할 때가 많습니다.
// Array의 forEach를 Array.prototype.forEach라고 쓰는 것과 마찬가지로 말입니다.

// 최근에는 프로토타입 메소드를 #으로 표시하는 표기법이 널리 쓰입니다.
// 예를 들어 Car.prototype.shift 를 Car#shift 로 쓰는 겁니다.

// [모든 함수]에는 prototype이라는 특별한 프로퍼티가 있습니다.
// 일반적인 함수에서는 프로토타입을 사용할 일이 없지만,
// 객체 생성자로 동작하는 함수에서는 프로토타입이 대단히 중요합니다.

// 함수의 prototype 프로퍼티가 중요해지는 시점은 new 키워드로 새 인스턴스를 만들었을 때입니다.
// 객체 인스턴스는 prototype 프로퍼티를 __proto__ 프로퍼티에 저장합니다.

// 프로토타입에서 중요한 것은 동적 디스패치라는 메커니즘입니다.
// 여기서 디스패치는 메소드 호출과 같은 의미입니다.

// 인스턴스에서 메소드나 프로퍼티를 정의하면, 프로토타입에 있는 것을 가리는 효과가 있습니다.
// 자바스크립트는 먼저 인스턴스를 체크하고, 거기에 없으면 프로토타입을 체크하기 때문입니다.
// 예제를 봅시다.

// Car 클래스는 이전에 만든 shift 메소드가 있는 클래스입니다.
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.useGears = ['P', 'N', 'R', 'D'];
        this.useGear = this.useGears[0];
    }
    shift(gear) {
        if (this.useGears.indexOf(gear) < 0) 
            throw new Error(`Invalid gear: ${gear}`);

        this.useGear = gear;
    }
}

const car1 = new Car();
const car2 = new Car();

console.log(car1.shift === Car.prototype.shift);     // true
car1.shift('D');
// car1.shift('d');                     // Error: Invalid gear: d
console.log(car1.useGear);              // 'D'
console.log(car1.shift === car2.shift); // true
console.log('**************************************');

car1.shift = function(gear) { this.useGear = gear.toUpperCase(); };
console.log(car1.shift === Car.prototype.shift);// false
console.log(car1.shift === car2.shift);         // false
car1.shift('d');
console.log(car1.useGear);                      // 'D'
