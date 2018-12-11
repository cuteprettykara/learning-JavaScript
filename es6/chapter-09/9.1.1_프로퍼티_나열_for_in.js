// 어떤 컨테이너의 콘텐츠를 리스트로 나열한다고 하면, 보통 배열을 생각하지 
// 객체를 생각하는 사람은 별로 없습니다.
// 하지만 객체도 분명 컨테이너이고, 프로퍼티 나열을 지원합니다.
// 하지만 순서가 보장되지 않습니다.

// hasOwnProperty는 상속된 프로퍼티가 for..in 문에 나타날 위험을 제거합니다.
// 다른 사람이 만든 객체의 프로퍼티르 나열하다 보면 예상치 못한 상황이 생길 수 있으므로,
// hasOwnProperty를 쓰는 습관을 들이길 권합니다.
const SYM = Symbol();
const o = {a: 1, b: 2, c: 3, [SYM]: 4};

for (const prop in o) {
    if (o.hasOwnProperty(prop)) {
        console.log(`${prop}: ${o[prop]}`);
    }
}
// a: 1
// b: 2
// c: 3

// for..in 루프에는 키가 심볼인 프로퍼티는 포함되지 않습니다.
// for..in을 배열에 사용할 수도 있지만, 그리 좋은 생각은 아닙니다.
// 배열에는 일반적인 for 루프나 forEach를 사용하십시오.