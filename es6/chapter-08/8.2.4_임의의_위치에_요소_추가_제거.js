// 첫 번째 매개변수: start      : 수정을 시작할 인덱스
// 두 번째 매개변수: deletCount : 제거할 요소 숫자(아무 요소도 제거하지 않을 때는 0)
// 나머지  매개변수: items      : 배열에 추가될 요소
const arr = [1, 5, 7];

console.log(arr.splice(1, 0, 2, 3, 4)); // []. arr은 이제 [1, 2, 3, 4, 5, 7] 입니다.
console.log(arr.splice(5, 0, 6));       // []. arr은 이제 [1, 2, 3, 4, 5, 6, 7] 입니다.
console.log(arr.splice(1, 2));          // [2, 3]. arr은 이제 [1, 4, 5, 6, 7] 입니다.
console.log(arr.splice(2, 1, 'a', 'b'));// [5]. arr은 이제 [1, 4, 'a', 'b', 6, 7] 입니다.