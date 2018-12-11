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

makeInsurable(Car.prototype);
const car1 = new Car("Tesla", "Model S");

car1.addInsurancyPolicy(new InsurancePolicy()); // works

// 이제 보험 관련 메소드들은 모두 [Car 클래스에 정의된 것처럼] 동작합니다.
// 자바스크립트의 관점에선ㄴ 실제로 그렇습니다.

// 개발자의 관점에서는 중요한 두 클래스를 [관리하기 쉽게] 만들었습니다.
// 자동차 회사에서 Car 클래스의 개발과 관리를 담당하고,
// 보험 회사에서 InsurancePolicy 클래스와 makeInsurable 믹스인을 관리하게 됩니다.