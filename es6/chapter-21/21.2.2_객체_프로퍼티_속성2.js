// name 프로퍼티 보이기
const obj = {foo: "bar"};

Object.defineProperty(obj, 'name', {
    value: 'Cynthia',
    enumerable: true
});
console.log(obj);       // { foo: 'bar', _color: 'red', name: 'Cynthia' }