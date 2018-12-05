// 객체를 해체할 때는 반드시 변수 이름과 객체의 프로퍼티 이름이 일치해야 합니다.

// 객체 선언
const obj = {b: 2, c: 3, d: 4};

// 객체 해체 할당
const {a, b, c} = obj;  // 선언과 할당을 같은 문에서 실행했습니다.

console.log(`a: ${a}`);     // undefined
console.log(`b: ${b}`);     // 2
console.log(`c: ${c}`);     // 3
// console.log(`d: ${d}`);     // ReferenceError


// 객체 해체는 할당만으로 이뤄질 수도 있습니다.
// 그렇게 하려면, 반드시 괄호를 써야 합니다.
// 괄호를 쓰지 않으면, 자바스크립트는 표현식 좌변을 [블록]으로 해석합니다.


const obj2 = {m: 2, n: 3, o: 4};
let l, m, n;

// 에러가 일어납니다.  : unexpected token =
// {l, m, n} = obj2;

// 동작합니다.
({l, m, n} = obj2);

console.log(`l: ${l}`);     // undefined
console.log(`m: ${m}`);     // 2
console.log(`n: ${n}`);     // 3
console.log('*************************');


// 배열을 해체할 때는 변수 이름을 마음대로 쓸 수 있으며, 이들은 배열 순서대로 대응합니다.

// 배열 선언
const arr = [1, 2, 3];

// 배열 해체 할당
let [x, y] = arr; 
console.log(`x: ${x}`);     // 1. 배열의 첫 번째 요소 값
console.log(`y: ${y}`);     // 2. 배열의 두 번째 요소 값. => 이 뒤의 배열 요소는 버려집니다.

// 6장에서 배울 확산 연산자(spread operator)를 사용하면 남은 요소를 새 배열에 할당할 수 있습니다.
const arr2 = [1, 2, 3, 4, 5];

let [u, v, ...rest] = arr2; 
console.log(`u: ${u}`);         // 1
console.log(`v: ${v}`);         // 2
console.log(rest);              // [3, 4, 5]



// 배열 해체를 활용하면 변수의 값을 서로 바꿀 수 있습니다.
// 해체를 사용하지 않으면 임시 변수가 필수적인 작업입니다.
let i = 5, j = 10;
[i, j] = [j, i];

console.log(`i: ${i}`);         // 10
console.log(`j: ${j}`);         // 5