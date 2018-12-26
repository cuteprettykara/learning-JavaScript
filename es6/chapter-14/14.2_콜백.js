// 콜백은 자바스크립트에서 가장 오래된 비동기적 메커니즘입니다.
// 콜백은 간단히 말해 나중에 호출할 함수입니다.

// 콜백 함수는 일반적으로 다른 함수에 넘기거나, 객체의 프로퍼티로 사용합니다.
// 콜백은 보통 [익명 함수]로 사용합니다.

// setTimeout은 콜백의 실행을 지정된 밀리초만큼 지연하는 내장 함수입니다.
console.log("Before timeout: " + new Date());
function f() {
    console.log("After timeout: " + new Date());
}

setTimeout(f, 60*1000); // 1분
console.log("I happen after setTimeout!");
console.log("Me too!");

// 이 예제에서는 명확하게 표현하기 위해 이름 붙은 함수 f를 setTimeout에 넘겼습니다.
// 이름 붙은 함수를 써야 하는 타당한 이유가 없다면, 일반적으로는 다음과 같이 익명 함수를 사용합니다.
setTimeout(function f() {
    console.log("After timeout: " + new Date());
}, 60*1000);

// setTimeout은 문법적인 불편함이 하나 있습니다.
// 지연 시간을 정하는 숫자 매개변수가 마지막 매개변수이기 때문에, 익명 함수를 사용할 때, 특히 그 함수가 길다면
// * 시간 매개변수를 찾기 어렵거나, 
// * 익명 함수의 일부분처럼 보일 때가 있습니다.

// 게다가 setTimeout과 setInterval은 대부분 익명 함수와 함께 사용합니다.
// [지연 매개변수는 마지막 행에 쓴다]는 원칙을 세워 두면 이런 혼란을 피할 수 있습니다.