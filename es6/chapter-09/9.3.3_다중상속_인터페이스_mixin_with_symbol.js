// 자동차 회사에서 Car 클래스의 개발과 관리를 담당하고,
// 보험 회사에서 InsurancePolicy 클래스와 makeInsurable 믹스인을 관리하게 됩니다.
// 두 회사의 업무가 충돌할 가능성을 와넞ㄴ히 없앤 건 아니지만,
// 모두가 거대한 Car 클래스에 달라붙어 일하는 것보다는 낫습니다.

// 물론 믹스인이 모든 문제를 해결해 주지는 않습니다.
// 보험 회사에서 shift 메소드를 만들게 된다면 Car 클래스의 동작이 이상해질 겁니다.
// instanceof 연산자로 보험에 가입할 수 있는 객체를 식별할 수도 없습니다.
// 'addInsurancyPolicy 메소드가 있다면 틀림없이 보험에 가입할 수 있다'는 식의 짐작만 가능할 뿐입니다.

// 심볼을 사용하면 이런 문제 일부를 경감할 수 있습니다.
// 보험 회사에서 매우 범용적인 메소드 이름을 계속 사용해서, 우연히 Car 클래스의 메소드와 충돌할까봐 걱정된다고 가정합시다.
// 그러면 보험 회사에 키를 모두 심볼로 사용해 달라고 요청할 수 있습니다.
// 보험회사가 제공하는 믹스인은 다음과 같은 형태가 될 겁니다.
class InsurancePolicy {}

const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();

function makeInsurable(o) {
    o[ADD_POLICY] = function(p) { this[_POLICY] = p; };
    o[GET_POLICY] = function() { return this[_POLICY]; };
    o[IS_INSURED] = function() { return !!this[_POLICY]; };
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
car1[ADD_POLICY](new InsurancePolicy());
console.log(car1[IS_INSURED]());

const car2 = new Car("Mazda", "3i");
car2[ADD_POLICY](new InsurancePolicy());
console.log(car2[IS_INSURED]());

// 심볼은 항상 고유하므로 믹스인이 Car 클래스의 기능과 충돌할 가능성은 없습니다.
// 쓰기가 조금 번거로울 수는 있겠지만, 훨씬 안전합니다.
// 메소드 이름에는 일반적인 문자열을 쓰고, 데이터 프로퍼티에는 _POLICY 같은 심볼을 쓰는 절충안을 생각할 수도 있습니다.
