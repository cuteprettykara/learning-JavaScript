// 방법1: 부정 연산자(!)를 써서 모든 값을 불리언으로 바꿀 수 있습니다.

//     * 부정 연산자를 한 번 사용하면, '참 같은 값'은 false로 바뀝니다.
//     * 부정 연산자를 한 번 더 쓰면, true를 얻을 수 있습니다.

//     !!(참 같은 값) = true;
//     !!(거짓 같은 값) = false;

// 방법2: 숫자형 변환과 마찬가지로 Boolean 생성자를 써도 결과는 같습니다.
const n = 0;            // 거짓 같은 값
const b1 = !!n;         // false
const b2 = Boolean(n);  // 숫자형 변환과 마찬가지로 new 키워드는 사용하지 않습니다.

console.log("!!f : " + b1);
console.log("Boolean(f) : " + b2);

console.log(typeof b1);
console.log(typeof b2);