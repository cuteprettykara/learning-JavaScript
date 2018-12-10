// push와 unshift : 새 요소를 추가해서 늘어난 길이를 반환
// pop과 shift    : 제거된 요소를 반환
const arr = ["b", "c", "d"];

console.log(arr.push("e")); // 4 
console.log(arr);           // ["b", "c", "d", "e"];

console.log(arr.pop());     // "e"
console.log(arr);           // ["b", "c", "d"]

console.log('\n');
console.log("******************************");
console.log('\n');

console.log(arr.unshift("a"));  // 4
console.log(arr);               // ["a", "b", "c", "d"]

console.log(arr.shift());       // "a"
console.log(arr);               // [b", "c", "d"]