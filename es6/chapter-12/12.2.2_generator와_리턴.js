// yield 문은, 설령 제너레이터의 마지막 문이더라도 제너레이터를 끝내지 않습니다.
// 제너레이터에서 return문을 사용하면 그 위치와 관계없이 
// * done은 true가 되고, 
// * value 프로퍼티는 return이 반환하는 값이 됩니다.
function* abc() {
    yield 'a';
    yield 'b';
    return 'c';
}

const it = abc();
console.log(it.next()); // { value: 'a', done: false }
console.log(it.next()); // { value: 'b', done: false }
console.log(it.next()); // { value: 'c', done: true }

// 이런 동작 방식이 정확하기는 하지만, 제너레이터를 사용할 때는 보통 done이 true이면
// value 프로퍼티에 주의를 기울이지 않는다는 점을 염두에 두십시오.
// 예를 들어 이 제너레이터를 for...of 루프에서 사용하면 c는 절대 출력되지 않습니다.
// "a"와 "b"는 출력되지만 "c"는 출력되지 않습니다.
for (const l of abc()) {
    console.log(l);
}

// 제너레이터에서 중요한 값을 return으로 반환하려 하지 마십시오.
// 제너레이터가 반환하는 값을 사용하려 할 때는 yield를 써야 하고,
// return은 제너레이터를 중간에 종료하는 목적으로만 사용해야 합니다.
// 따라서 제너레이터에 return을 쓸 때는 반환값을 쓰지 않는 습관을 들이길 권합니다.