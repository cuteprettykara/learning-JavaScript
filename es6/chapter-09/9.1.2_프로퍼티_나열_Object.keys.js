// Object.keys는 객체에서 나열 가능한 [문자열] 프로퍼티를 [배열]로 반환합니다.
const SYM = Symbol();
const o = {a: 1, b: 2, c: 3, [SYM]: 4};

Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));
// a: 1
// b: 2
// c: 3

// 이 예제는 for..in 루프를 썼을 때와 같은 결과이고, hasOwnProperty를 체크할 필요는 없습니다.
// 객체의 [프로퍼티 키]를 [배열]로 가져와야 할 때는 Object.keys가 편리합니다.
// 예를 들어 객체에서 x로 시작하는 프로퍼티를 모두 가져온다면 다음과 같이 할 수 있습니다.