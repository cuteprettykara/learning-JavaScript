// 물론 이렇게 해도 됩니다. 필요한 것이 함수 하나라면 가장 간단한 해결책이 될 수 있습니다.
// 하지만 제곱근의 합을 구하는 함수, 세제곱의 합을 구하는 함수, 하는 식으로 이런 패턴이 계속 반복된다면 어떻게 해야 할까요?
// 필요한 함수를 반환하는 함수를 만들어 문제를 해결할 수 있습니다.

// 해법 2: 함수를 반환하는 함수를 만든다.
function sum(arr, f) {
    if (typeof f != 'function') f = x => x;

    return arr.reduce((a, x) => a += f(x), 0);
}

function newSummer(f) {
    return arr=>sum(arr, f);
}

// 새 함수 newSummer가 반환하는 함수는 단 하나의 매개변수만 받으면서도, 우리가 원하는 중간 함수를 마음대로 쓸 수 있습니다.
// 다음 예제를 보십시오.
const sumOfSquares = newSummer(x => x*x);
const sumOfCubes = newSummer(x => Math.pow(x, 3));

console.log(sumOfSquares([1, 2, 3]));   // 14
console.log(sumOfCubes([1, 2, 3]));     // 36

// 이 예제처럼 매개변수 [여러 개]를 받는 함수를 => 매개변수 [하나]만 받는 함수로 바꾸는 것을 커링(currying)이라 부릅니다.
// 커링이라는 이름은 이 패턴을 만든 미국의 수학자 하스켈 커리(Haskell Curry)의 이름을 딴 것입니다.