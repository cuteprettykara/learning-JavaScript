// 간혹 조건을 만족하는 요서의 인덱스도, 요소 자체도 필요 없고,
// 조건을 만족하는 요소가 있는지 없는지만 알면 충분할 때가 있습니다.
// 물론 앞에서 설명한 함수를 사용할 수도 있지만,
// 자바스크립트에는 이럴 때 쓰라고 만든 some과 every가 있습니다.

// some은 조건에 맞는 요소를 찾으면 즉시 검색을 멈추고 true를 반환하며, 찾지 못하면 false를 반환합니다.
const arr = [5, 7, 12, 15, 17];

console.log(arr.some(x => x%2 === 0));                      // true; 12는 짝수입니다.
console.log(arr.some(x => Number.isInteger(Math.sqrt(x)))); // false; 제곱수가 없습니다.

// every는 배열의 모든 요소가 조건에 맞아야 true를 반환하며, 그렇지 않다면 false를 반환합니다.
// every는 조건에 맞지 않는 요소를 찾아야만 검색을 멈추고 false를 반환합니다.
// 조건에 맞지 않는 요소를 찾지 못하면 배열 전체를 검색합니다.

const arr2 = [4, 6, 16, 36];
console.log(arr2.every(x => x%2 === 0));                     // true; 홀수가 없습니다.
console.log(arr2.every(x => Number.isInteger(Math.sqrt(x))));// false; 6은 제곱수가 아닙니다.

// 콜백 함수를 받는 모든 메소드가 그렇듯, 
// some과 every도  콜백함수를 호출할 때, this로 사용할 값을 두 번째 매개변수로 받을 수 있습니다.