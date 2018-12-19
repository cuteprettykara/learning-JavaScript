// 배열의 문자열 요소들을 몇몇 구분자로 합치려 할 때가 많습니다.
// Array.prototype.join은 매개변수로 구분자 하나를 받고, 요소들을 하나로 합친 문자열을 반환합니다.
// 이 매개변수가 생략됐을 때으 기본값은 쉼표이며,
// 문자열 요소들을 합칠 때 정의되지 않은 요소, 삭제된 요소, null, undefined는 모두 빈 문자열로 취급합니다.
const arr = [1, null, "hello", "world", true, undefined];
delete arr[3];
console.log(arr.join());        // "1,,hello,,true,"
console.log(arr.join(''));      // "1hellotrue"
console.log(arr.join(' -- '));  // "1 --  -- hello --  -- true -- "

// 문자열 병합과 Array.prototype.join을 함께 쓰면 HTML <ul>같은 것도 만들 수 있습니다.
// 이 때 빈 배열에 사용하면 빈 <li> 요소 하나만 나올 겁니다.
const attributes = ["Nimble", "Perceptive", "Generous"];
const html = '<ul><li>' + attributes.join('</li><li>') + '</li></ul>';
console.log(html);  
// <ul>
//      <li>Nimble</li>
//      <li>Perceptive</li>
//      <li>Generous</li>
//</ul>