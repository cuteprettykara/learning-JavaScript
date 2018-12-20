// 프로퍼티를 꼭 보호해야 한다면 스코프를 이용해 보호하는 WeakMap 인스턴스를 사용할 수 있습니다. 
// 여기서는 즉시 호출하는 함수 표현식을 써서 WeakMap을 클로저로 감싸고, 바깥에서 접근할 수 없게 했습니다.
// WeakMap은 클래스 외부에서 접근하면 안 되는 프로퍼티를 안전하게 저장합니다.

// syntax 1
/* const Car = (function() {

    const carProps = new WeakMap();
    
    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this._useGears = ['P', 'N', 'R', 'D'];
            carProps.set(this, {useGear: this._useGears[0]});
        }
        get useGear() { return carProps.get(this).useGear; }
        set useGear(value) {
            if (this._useGears.indexOf(value) < 0) 
                throw new Error(`Invalid gear: ${value}`);
    
            carProps.get(this).useGear = value;
        }
    
        shift(gear) { this.useGear = gear; }
    }

    return Car;
})(); */

// syntax 2
const Car = (function() {

    const carProps = new WeakMap();
    
    return class {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this._useGears = ['P', 'N', 'R', 'D'];
            carProps.set(this, {useGear: this._useGears[0]});
        }
        get useGear() { return carProps.get(this).useGear; }
        set useGear(value) {
            if (this._useGears.indexOf(value) < 0) 
                throw new Error(`Invalid gear: ${value}`);
    
            carProps.get(this).useGear = value;
        }
    
        shift(gear) { this.useGear = gear; }
    }
})();

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");

car1.shift('D');
console.log(car1.useGear);

car2.shift('R');
console.log(car2.useGear);