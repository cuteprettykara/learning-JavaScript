// 비교연산자는 이름처럼 두 개의 값을 비교합니다.
// 비교연산자 종류
// 1. 일치함(strict equality)
//      * 두 값이 같은 객체를 가리키거나, 
//      * 같은 타입이고 같은 값(원시타입)
// 2. 동등함(loose equaility)
//      * 두 값이 같은 객체를 가리키거나,
//      * 같은 값을 갖도록 [변환 가능]
// 3. 대소 관계

// 문자열 "33"은 숫자 33으로 변환할 수 있으므로 이 둘은 동등합니다.
// 하지만 타입이 다르므로 일치하지 않습니다.

// 기계적으로 동등 연산자를 쓰는 습관은 빨리 버릴수록 좋습니다.

const n = 5;
const s = "5";
console.log(n === s);           // false
console.log(n !== s);           // true
console.log(n === Number(s));   // true
console.log(n !== Number(s));   // false
console.log(n == s);            // true: 권장하지 않습니다.
console.log(n != s);            // false:권장하지 않습니다.

console.log('*********************');

const a = { name: 'an object' };
const b = { name: 'an object' };

console.log(a === b);           // false    --- 객체는 항상 다릅니다.
console.log(a !== b);           // true
console.log(a == b);            // false:권장하지 않습니다.
console.log(a != b);            // true: 권장하지 않습니다.
