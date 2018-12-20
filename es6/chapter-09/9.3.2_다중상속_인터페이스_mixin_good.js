// 이 방법은 동작하지만. 모든 자동차에서 makeInsurable을 호출해야 합니다.
// Car 생성자에 추가할 수도 있지만, 그렇게 하면 이 기능을 모든 자동차에 복사하는 형국이 됩니다.
// 다행히 해결책은 쉬운 편입니다.
class InsurancePolicy {}
function makeInsurable(o) {
    o.addInsurancyPolicy = function(p) { this.InsurancePolicy = p; };
    o.getInsurancyPolicy = function() { return this.InsurancePolicy; };
    o.isInusred = function() { return !!this.InsurancePolicy; };
}

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

/**************************************************************** */
makeInsurable(Car.prototype);   // 와우! 이제 한 번만 호출하면 됩니다.
/**************************************************************** */

const car1 = new Car("Tesla", "Model S");
car1.addInsurancyPolicy(new InsurancePolicy()); // works
console.log(car1.isInusred());

const car2 = new Car("Mazda", "3i");
car2.addInsurancyPolicy(new InsurancePolicy()); // works
console.log(car2.isInusred());




// 이제 보험 관련 메소드들은 모두 [Car 클래스에 정의된 것처럼] 동작합니다.
// 자바스크립트의 관점에서는 실제로 그렇습니다.

// 개발자의 관점에서는 중요한 두 클래스를 [관리하기 쉽게] 만들었습니다.