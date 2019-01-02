// 우리는 객체 프로퍼티에 대해 꽤 잘 알고 있습니다.

// 프로퍼티에는 항상 키가 있고, 키는 문자열이나 심볼일 수 있습니다.
// 프로퍼티의 값은 어떤 타입이든 괜찮습니다.
// 배열이나 맵과 달리 객체의 프로퍼티에는 순서가 없습니다.
// 객체 프로퍼티에 접근할 때는 점 연산자나 대괄호 연산자를 사용합니다.
// 객체 프로퍼티는 
//   * 식별자를 키로 사용하는 일반적인 프로퍼티,
//   * 심볼이나 표현식을 사용하는 [계산된] 프로퍼티,
//   * 메소드 단축 표기의 세 가지가 있습니다.

// 그 밖에도 프로퍼티에 대해 더 알아야 할 것이 있습니다.
// 프로퍼티에는 자신이 속한 객체 안에서 어떻게 동작할지 결정하는 속성(attribute)이 있습니다.
// 먼저 우리가 잘 알고 있는 방식으로 프로퍼티를 만들고, Object.getOwnPropertyDescriptor를 써서 
// 속성을 알아봅시다.
const obj = {foo: "bar"};
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
// {value: "bar", writable: true, enumerable: true, configurable: true}

// * writable     : 프로퍼티 값을 바꿀 수 있는지 판단
// * enumerable   : for...in 문이나 Object.keys, 확산 연산자에서 객체 프로퍼티를 나열할 때
//                  해당 프로퍼티가 포함될지 판단
// * configurable : 프로퍼티를 객체에서 삭제하거나, 속성을 수정할 수 있는지 판단

// Object.defineProperty로는 프로퍼티 속성을 컨트롤하거나(설정 가능한 경우), 새 프로퍼티를 만들 수 있습니다.
// 예를 들어 obj의 foo 프로퍼티를 읽기 전용으로 만들 수 있습니다.
Object.defineProperty(obj, 'foo', {writable: false});

// 이제 foo에 값을 할당하려 하면 에러가 일어납니다.
obj.foo = 3;

// 읽기 전용 프로퍼티에 값을 할당하려 할 때 에러가 발생하는 것은 스트릭트 모드에서뿐입니다.
// 스트릭트 모드가 아닐 때에는 [할당이 실패하지만], 에러는 일어나지 않습니다.

// Object.defineProperty를 써서 객체에 새 프로퍼티를 추가할 수도 있습니다.
// 일반적인 데이터 프로퍼티와 달리, 객체가 [일단 생성된 뒤에는] 접근자 프로퍼티를 추가할 다른 방법이 없고,
// Object.defineProperty를 쓰는 방법뿐입니다. obj에 color 프로퍼티를 추가해봅시다.
// 이번에는 심볼을 쓰지 않고 유효성 검사도 하지 않습니다.
Object.defineProperty(obj, 'color', {
    get: function() { return this._color; },
    set: function(value) { this._color = value; }
});

obj.color = 'red';
console.log(obj);       // { foo: 'bar', _color: 'red' }
console.log(obj.color); // "red"

// Object.defineProperty로 데이터 프로퍼티를 추가할 때는 value 프로퍼티를 사용하면 됩니다.
// obj에 name과 greet 프로퍼티를 추가해 봅시다.
Object.defineProperty(obj, 'name', {
    value: 'Cynthia'
});

Object.defineProperty(obj, 'greet', {
    value: function() { return `Hello, my name is ${this.name}`; }
});

console.log(obj.greet());   // "Hello, my name is Cynthia"
console.log(obj);           // { foo: 'bar', _color: 'red' }
console.log(obj.name);      // "Cynthia"

// obj.name을 콘솔에 써보면 Cynthia가 나타나지만,
// obj을 콘솔에 써보면 name 프로퍼티가 나타나지 않습니다.
// 이는 enumerable 속성이 정의되지 않았기 때문입니다.
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
//{ value: 'Cynthia', writable: false, enumerable: false, configurable: false }