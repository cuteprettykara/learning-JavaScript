// 부정 연산자(!)를 써서 모든 값을 불리언으로 바꿀 수 있습니다.
// !!(참 같은 값) = true;
// !!(거짓 같은 값) = false;
const f = 0;    // 거짓 같은 값
const b1 = !!f;
const b2 = Boolean(f);  // 숫자형 변환과 마찬가지로 new 키워드는 사용하지 않습니다.

console.log("!!f : " + b1);
console.log("Boolean(f) : " + b2);