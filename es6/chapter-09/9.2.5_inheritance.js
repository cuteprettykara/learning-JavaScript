// 클래스의 계층구조를 만들 때 프로토타입 체인을 염두에 두면 효율적인 구조를 만들 수 있습니다.
// 즉, 프로토타입 체인에서 가장 적절한 위치에 메소드를 정의하는 겁니다.
// 자동차는 운송수단의 일종입니다.
// 자동차에는 deployAirbags란 메소드가 있을 수 있습니다.
// 이 메소드를 운송수단 클래스에 정의할 수도 있겠지만, 에어백이 달린 보트는 본 적이 없겠죠?
// 반면 운송 수단은 대부분 승객을 태울 수 있으므로, addPassenger 메소드는 운송 수단 클래스에 적당합니다.
// 이런 시나리오를 자바스크립트로 만들어 봅시다.
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

const v = new Vehicle();
v.addPassenger("Frank");
v.addPassenger("Judy");
console.log(v.passengers);  // [ 'Frank', 'Judy' ]

const c = new Car();
c.addPassenger("Alice");
c.addPassenger("Cameron");
console.log(c.passengers);  // [ 'Alice', 'Cameron' ]

v.deployAirbags();          // TypeError: v.deployAirbags is not a function
c.deployAirbags();

// super()는 슈퍼클래스의 생성자를 호출하는 함수입니다.
// 서브클래스에서는 이 함수를 반드시 호출해야 합니다.