// find와 findIndex에 전달하는 함수의 this도 수정할 수 있습니다.
// 이를 이용해서 함수가 [객체의 메소드인 것처럼] 호출할 수 있습니다.
// [ID를 조건]으로 Person 객체를 검색하는 예제
class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}

Person.nextId = 0;

const jamie = new Person("Jamie"),
    juliet = new Person("Juliet"),
    peter = new Person("Peter"),
    jay = new Person("Jay");

const arr = [jamie, juliet, peter, jay];

// 옵션 1: ID를 직접 비교하는 방법
let find = arr.find(p => p.id === juliet.id);  // juliet 객체

console.log(find);

// 옵션 2: 'this' 매개변수를 이용하는 방법
let find2 = arr.find(function(p) {
    return p.id === this.id;
} , juliet);

console.log(find2);                             // juliet 객체