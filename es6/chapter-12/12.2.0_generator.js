// 제너레이터(generator)란 이터레이터를 사용해 [자신의 실행을 제어]하는 [함수]입니다.
// 일반적인 함수는 매개변수를 받고 값을 반환하지만, 호출자는 매개변수 외에는 함수의 실행을 제어할 방법이 전혀 없습니다.
// 함수를 호출하면 그 함수가 종료될 때까지 제어권을 완전히 넘기는 겁니다.
// 제너레이터에서는 그렇지 않습니다.

// 제너레이터는 두 가지 새로운 개념을 도입했습니다.
// 1. 함수의 실행을 개별적 단계로 나눔으로써 함수의 실행을 제어한다는 것입니다.
// 2. 실행 중인 함수와 통신한다는 것입니다.

// 제너레이터는 두 가지 예외를 제외하면 일반적인 함수와 같습니다.
// 1. 제너레이터는 언제든 호출자에게 제어권을 넘길(yield) 수 있습니다.
// 2. 제너레이터는 호출한 즉시 실행되지는 않습니다. 대신 이터레이터를 반환하고,  
//    이터레이터의 next 메소드를 호출함에 따라 실행됩니다.

// 제너레이터를 만들 때는 function 키워드 뒤에 *를 붙입니다.
// 이것을 제외하면 문법은 일반적인 함수와 같습니다.
// 제너레이터에서는 return 외에 yield 키워드를 쓸 수 있습니다.

// 무지개 색깔을 반환하는 단순한 제너레이터 예제를 하나 만들어 봅시다.
function* rainbow() {   // * 기호는 제너레이터 문법입니다.
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
    yield 'blue';
    yield 'indigo';
    yield 'violet';
}

// 이제 이 제너레이터를 어떻게 호출하는지 알아봅시다.
// [제너레이터를 호출하면] 이터레이터를 얻습니다.
// 함수를 호출한 다음 이터레이터를 써서 단계별로 진행합니다.
const it = rainbow();
console.log(it.next()); // { value: 'red', done: false }
console.log(it.next()); // { value: 'orange', done: false }
console.log(it.next()); // { value: 'yellow', done: false }
console.log(it.next()); // { value: 'green', done: false }
console.log(it.next()); // { value: 'blue', done: false }
console.log(it.next()); // { value: 'indigo', done: false }
console.log(it.next()); // { value: 'violet', done: false }
console.log(it.next()); // { value: undefined, done: true }

// rainbow 제너레이터는 이터레이터를 반환하므로 for...of 루프에서 쓸 수 있습니다.
for (const color of rainbow()) {
    console.log(color);
}