// 제조사(make)와 모델 데이터, 
// 변속(shift) 기능을 추가해 봅시다.
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

// 여기서 this 키워드는 의도한 목적, 즉 메소드를 호출한 인스턴스를 가리키는 목적으로 쓰였습니다.
// this를 일종의 placeholder로 생각해도 좋습니다.
// 클래스를 만들 때 사용한 this 키워드는 나중에 만들 인스턴스의 placeholder입니다.
// 메소드를 [호출]하는 시점에서 this가 무엇인지 알 수 있게 됩니다.
// 이제 이 클래스를 실제로 사용해 봅시다.

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");

car1.shift('D');
console.log(car1.useGear);

car2.shift('R');
console.log(car2.useGear);

// Car 클래스에 shift 메소드를 사용하면 잘못된 기어를 선택하는 실수를 방지할 수 있을 것처럼 보입니다.
// 하지만 완벽하게 보호되는 것은 아닙니다.
// 직접 car1.userGear = 'X' 라고 설정한다면 막을 수 없습니다.