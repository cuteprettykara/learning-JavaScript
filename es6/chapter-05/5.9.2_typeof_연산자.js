// typeof 연산자는 피연산자의 타입을 나타내는 문자열을 반환합니다.
// 애석하게도 이 연산자는 자바스크립트의 일곱 가지 데이터 타입을 정확히 나타내지 못하며
// 끝없는 혼란을 초래했고 계속 비판을 받았습니다.
console.log(typeof null);   // "object"

// typeof 연산자는 typeof null을 "object"라고 판단합니다.
// null은 당연히 객체가 아니라 원시 값입니다.

// typeof는 배열과 배열 아닌 객체도 정확히 구분하지 못합니다.
// 함수는 정확히 식별하지만, typeof []는 "object"를 반환합니다.
console.log(typeof function() {});  // "function"
console.log(typeof []);             // "object"



// typeof의 반환값
console.log('**********************');
console.log(typeof 1);              // "number"
console.log(typeof "");             // "string"
console.log(typeof true);           // "boolean"
console.log(typeof null);           // "object" : 애석하지만 사실입니다.
console.log(typeof undefined);      // "undefined"
console.log(typeof Symbol());       // "symbol" : es6

console.log(typeof function() {});  // "function"
console.log(typeof []);             // "object"
console.log(typeof {});             // "object"
