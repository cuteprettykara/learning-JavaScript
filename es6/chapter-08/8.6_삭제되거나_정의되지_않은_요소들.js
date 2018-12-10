// Array 메소드는 삭제되거나 정의되지 않은 요소들을 다룰 때 좀 당혹스럽게 동작하곤 합니다.
// map과 filter, reduce는 삭제되거나 정의되지 않은 요소들에서 콜백 함수를 호출하지 않습니다.
// 예를 들어 ES5에서 배열을 초기화할 때 다음과 같은 방법을 시도해 보고 실망했던 독자도 있을 겁니다.

const arr = new Array(10).map(function(x) {return 5;});
console.log(arr);   // [ <10 empty items> ]

// arr의 요소는 전부 undefined입니다. 
// 이와 비슷하게, 배열 중간의 요소를 삭제하고 map을 호출하면 배열 가운데 '구멍'이 생깁니다.
const arr2 = [1, 2, 3, 4, 5];
delete arr2[2];
console.log(arr2.map(x => 0));  // [ 0, 0, <1 empty item>, 0, 0 ]