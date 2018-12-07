// 사각지대(temporal dead zone)란, let으로 선언하는 변수는 선언하기 전까지 존재하지 않는다는 
// 직관적인 개념을 잘 나타내는 표현입니다.
// 스코프 안에서 변수의 사각지대는 변수가 선언되기 전의 코드입니다.

// typeof 연산자는 변수가 선언됐는지 알아보고, 존재를 확인하는 안전한 방법으로 알려져 있습니다.
// 즉, let키워드가 도입되고 변수의 사각지대가 생기기 전에는 다음과 같은 코드는 항상 안전하며 
// 에러가 발생하지도 않았습니다.
if (typeof x === "undefined") {
    console.log("x doesn't exist or is undefined");
} else {
    // x를 사용해도 안전한 코드
    console.log("x를 사용해도 안전한 코드");
}


// 하지만 이 코드를 let으로 변수 선언하면 안전하지 않습니다.
if (typeof x === "undefined") {                     // ReferenceError: x is not defined
    console.log("x doesn't exist or is undefined");
} else {
    // x를 사용해도 안전한 코드
    console.log("x를 사용해도 안전한 코드");
}
let x = 5;

// ES6에서는 typeof 연산자로 변수가 정의됐는지 확인할 필요가 거의 없으므로, typeof가 문제를 일으킬 소지도 거의 없습니다.