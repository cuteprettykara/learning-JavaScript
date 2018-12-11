// 현실 세계를 생각해보면 다중 상속을 적용할 수 있는 문제가 많습니다.
// 예를 들어 자동차는 운송수단인 동시에 '보험을 들 수 있는' 대상입니다.

// 다중 상속을 지원하지 않는 언어 중에는 인터페이스 개념을 도입해서 이런 상황에 대처하는 언어가 많습니다.
// Car의 수퍼클래스는 Vehicle 하나뿐이지만, Insurable, Container 등 여러 인터페이스를 가질 수 있습니다.

// 자바스크립트는 흥미로운 방시긍로 이들을 절충했습니다.
// 자바스크립트는 프로토타입 체인에서 여러 부모를 검색하지는 않으므로 단일 상속 언어라고 해야 하지만,
// 어떤 면에서는 다중 상속이나 인터페이스보다 더 나은 방법을 제공합니다(물론 더 못할 때도 있습니다).

// 자바스크립트가 다중 상속에 대한 해답으로 내놓은 개념이 믹스인(mixin)입니다.
// 믹스인이라 '기능을 필요한 만큼 섞어 놓은 것' 입니다.

// 자동차에 적용할 수 있는 보험 가입(insurable) 믹스인을 만듭시다.
// 보험 가입 믹스인 외에도, InsurancePolicy 클래스를 만듭니다.
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

const car1 = new Car("Tesla", "Model S");
makeInsurable(car1);

car1.addInsurancyPolicy(new InsurancePolicy()); // works

// 이 방법은 동작하지만. 모든 자동차에서 makeInsurable을 호출해야 합니다.
// Car 생성자에 추가할 수도 있지만, 그렇게 하면 이 기능을 모든 자동차에 복사하는 형국이 됩니다.