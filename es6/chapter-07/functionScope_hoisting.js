// let을 쓰면, 변수를 선언하기 전 사용하려 할 때 에러가 일어납니다.
console.log(x);         // ReferenceError: x is not defined
let x = 3;              // 여기에는 결코 도달할 수 없습니다.

// 반면 var로 변수를 선언하면 선언하기 전에도 사용할 수 있습니다.
console.log(y);         // undefined
var y = 3;
console.log(y);         // 3

// var로 선언한 변수는 끌어올린다는 뜻의 호이스팅(hoisting)이라는 메커니즘을 따릅니다.
// 자바스크립트는 함수나 전역 스코프 전체를 살펴보고, var로 선언한 변수를 맨 위로 끌어올립니다.
// 여기서 중요한 것은 선언만 끌어올려진다는 것이며, 할당은 끌어올려지지 않는다는 겁니다.
// 자바스크립트는 이전 예제를 다음과 같이 해석합니다.
var y;                  // hoisting; 선언이 끌어올려집니다.
console.log(y);         // undefined
y = 3;
console.log(y);         // 3