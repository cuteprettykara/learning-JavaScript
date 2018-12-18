// IIFE는 함수를 선언하고 즉시 실행합니다.
// IIFE의 장점은 내부에 있는 것들이 모두 자신만의 스코프를 가지지만,
// IIFE 자체는 함수이므로 그 [스코프 밖으로] 무언가를 내보낼 수 있다는 겁니다.
const message = (function() {
    const secret = "I'm a secret!";
    return `The secret is ${secret.length} characters long.`;
})();

console.log(message);

// 변수 secret은 IIFE의 스코프 안에서 안전하게 보호되며, 외부에서 접근할 수 없습니다.
// IIFE는 함수이므로 무엇이든 반환할 수 있습니다.
// IIFE에서 배열이나 객체, 함수를 반환하는 경우도 무척 많습니다.

// 자신이 몇 번 호출됐는지 보고하는 함수를 생각해 봅시다.
// 이 함수가 몇 번 호출됐는지를 저장한 값을 외부에서는 절대 손댈 수 없습니다.

const f= (function() {
    let count = 0;
    return function() {
        return `I have been called ${++count} time(s).`;
    };
})();

console.log(f());   // "`I have been called 1 tiem(s)."
console.log(f());   // "`I have been called 2 tiem(s)."
console.log(f());   // "`I have been called 3 tiem(s)."

// ES6에서 블록 스코프 변수를 도입하면서 IIFE가 필요한 경우가 줄어들긴 했지만,
// 여전히 매우 널리 쓰입니다.
// 클로저를 만들고 클로저에서 무언가 반환받을 때에는 유용하게 쓸 수 있습니다.