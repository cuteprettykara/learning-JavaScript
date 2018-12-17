// apply는 배열 요소를 함수 매개변수로 사용해야 할 때 유용합니다.
// apply를 설명할 때 흔히 사용하는 예제는, 배열의 최솟값과 최대값을 구하는 겁니다.
const arr = [2, 3, -5, 15, 7];

console.log(Math.min.apply(null, arr)); // -5
console.log(Math.max.apply(null, arr)); // 15

// this의 값에 null을 쓴 이유는 Math.min과 Math.max가 [this와 관계없이 동작]하기 때문입니다.
// 즉, 무엇을 넘기든 관계없습니다.