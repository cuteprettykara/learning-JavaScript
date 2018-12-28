// [정규식을 쓰지 않고] 검색하고 교체하는 방법을 간단히 살펴봅시다.

// String.prototype 메소드의 검색과 교체 기능에는 한계가 있지만, 그 한계 안에서는 충분히 쓸만합니다.
// 큰 문자열 안에 원하는 부분 문자열이 [존재하는지] [찾기]만 하면 될 때는, String.prototype 메소드로 충분합니다.
const input = "As I was going to Saint Ives";

console.log(input.startsWith("As"));        // true
console.log(input.endsWith("Ives"));        // true
console.log(input.startsWith("going", 9));  // true -- 인덱스 9에서 시작합니다.
console.log(input.endsWith("going", 14));   // true -- 인덱스 14를 문자열의 끝으로 간주합니다.
console.log('*********************');

console.log(input.includes("going"));       // true
console.log(input.includes("going", 10));   // false -- 인덱스 10에서 시작하면 going이 없습니다.
console.log('*********************');

console.log(input.indexOf("going"));        // 9
console.log(input.indexOf("going", 10));    // -1
console.log(input.indexOf("nope"));         // -1
console.log('*********************');

// 부분 문자열을 찾아 [교체]하려면 String.prototype.replace를 사용합니다.
const output = input.replace("going", "walking");
console.log(output);

// 원래 문자열 input은 바뀌지 않습니다. 
// 자바스크립트 문자열은 항상 불변(immutable)입니다.
console.log(input);




