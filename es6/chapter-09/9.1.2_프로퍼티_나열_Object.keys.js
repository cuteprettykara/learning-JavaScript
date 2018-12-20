// Object.keys는 객체에서 나열 가능한 [문자열] 프로퍼티를 [배열]로 반환합니다.
const SYM = Symbol();
const o = {a: 1, b: 2, c: 3, [SYM]: 4};

Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));
// a: 1
// b: 2
// c: 3

// 이 예제는 for..in 루프를 썼을 때와 같은 결과이고, [hasOwnProperty를 체크할 필요는 없습니다].
// Object.keys를 사용하면 프로토타입 체인에 정의된 프로퍼티를 나열하는 문제를 피할 수 있습니다. (p.238 참고)