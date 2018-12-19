// reverse는 이름 그대로 요소의 순서를 반대로 바꿉니다(수정).
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());     // arr은 이제 [5, 4, 3, 2, 1] 입니다.

// sort는 배열 요소의 순서를 정렬합니다.
/* const arr = [5, 3, 2, 4, 1];
console.log(arr.sort());     // arr은 이제 [1, 2, 3, 4, 5] 입니다. */

// sort는 정렬 함수를 받을 수 있습니다.
// 일반적으로는 객체가 들어있는 배열을 정렬할 수 없지만, 정렬 함수를 사용하면 가능합니다.
// 정렬 함수(a, b) { ... }의 반환값
// * 음수: a를 b보다 낮은 색인으로 정렬
// * 0   : X
// * 양수: b를 a보다 낮은 색인으로 정렬
const arr = [
    {name: "Suzanne"},
    {name: "Jim"},
    {name: "Trevor"},
    {name: "Amanda"}
];

console.log(arr.sort());        // arr은 바뀌지 않았습니다.
console.log(arr.sort((a, b)=> a.name > b.name));        // arr은 name 프로퍼티의 알파벳 순으로 정렬됩니다.
console.log(arr.sort((a, b)=> a.name[1] < b.name[1]));  // arr은 name 프로퍼티의 두 번째 글자의 알파벳 역순으로 정렬됩니다.