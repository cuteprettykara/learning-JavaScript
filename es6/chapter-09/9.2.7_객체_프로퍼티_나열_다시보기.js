// obj.hasOwnProperty(x)
//     true : obj에 프로퍼티 x가 있다면,
//     false: obj에 프로퍼티 x가 없다면 or 프로토타입 체인에만 정의되었다면

// ES6 클래스를 설계 의도대로 사양한다면
// 데이터 프로퍼티는 항상 프로토타입 체인이 아니라, 인스턴스에 정의해야 합니다.
// 하지만 프로퍼티를 프로토타입에 정의하지 못하도록 강제하는 장치는 없으므로,
// 확실히 확인하려면 항상 hasOwnProperty를 사용하는 편이 좋습니다.
class Super {
    constructor() {
        this.name = 'Super';
        this.isSuper = true;
    }
}

// 유효하지만, 권장하지는 않습니다.
Super.prototype.sneaky = 'not recommended!';

class Sub extends Super {
    constructor() {
        super();
        this.name = 'Sub';
        this.isSub = true;
    }
}

const obj = new Sub();

for (const p in obj) {
    console.log(`${p}: ${obj[p]}` + 
        (obj.hasOwnProperty(p) ? '' : ' (inherited)')
    );
}
// name: Sub
// isSuper: true
// isSub: true
// sneaky: not recommended! (inherited)


// name, isSuper, isSub 프로퍼티는 모두 인스턴스에 정의됐습니다.
// (수퍼클래스의 생성자에서 선언한 프로퍼티는 서브클래스 인스턴스에도 정의됩니다)


// Object.keys를 사용하면 프로토타입 체인에 정의된 프로퍼티를 나열하는 문제를 피할 수 있습니다.
console.log('************************');
Object.keys(obj).forEach(p => console.log(`${p}: ${obj[p]}`));
// name: Sub
// isSuper: true
// isSub: true