// Car 클래스를 다음과 같이 수정하면 실수로 기어 프로퍼티를 고치지 않도록 어느 정도 막을 수 있습니다.
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._useGears = ['P', 'N', 'R', 'D'];
        this._useGear = this._useGears[0];
    }
    get useGear() { return this._useGear; }
    set useGear(value) {
        if (this._useGears.indexOf(value) < 0) 
            throw new Error(`Invalid gear: ${value}`);

        this._useGear = value;
    }

    shift(gear) { this.useGear = gear; }
}

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");

car1.shift('D');
console.log(car1.useGear);

car2.shift('R');
console.log(car2.useGear);

// 예민한 독자라면 여전히 car1._userGear = 'X'처럼 _userGear를 직접 바꿀 수 있다고 지적할 겁니다.
// 이 예제에서는 외부에서 접근하면 안 되는 프로퍼티 이름 앞에 밑줄을 붙이는, 소위 '가짜접근제한'을 사용했습니다.
// 진정한 제한이라기보다는 "아, 밑줄이 붙은 프로퍼티에 접근하려고 하네? 이건 실수로군." 
// 하면서 빨리 찾을 수 있도록 하는 방편이라고 봐야 합니다.