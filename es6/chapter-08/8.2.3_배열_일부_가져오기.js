// 첫 번째 매개변수: start : 어디서부터 가져올지
// 두 번째 매개변수: end   : 어디까지 가져올지(end는 제외).
//                          생략하면 배열의 마지막까지 반환합니다.
// 음수 인덱스를 쓰면 배열의 끝에서부터 요소를 셉니다.
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(3));      // [4, 5]. arr은 바뀌지 않습니다.
console.log(arr.slice(2, 4));   // [3, 4]. arr은 바뀌지 않습니다.
console.log(arr.slice(-2));     // [4, 5]. arr은 바뀌지 않습니다.
console.log(arr.slice(1, -2));  // [2, 3]. arr은 바뀌지 않습니다.
console.log(arr.slice(-2, -1)); // [4].    arr은 바뀌지 않습니다.