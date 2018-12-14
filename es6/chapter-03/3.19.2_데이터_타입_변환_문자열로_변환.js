// 자바스크립트의 모든 객체에는 [문자열 표현]을 반환하는 toString() 메소드가 있습니다.
const n = 33.5;
console.log(n + " : " + typeof(n));

const s = n.toString();
console.log(s + " : " + typeof(s));

// Date 객체의 toString()은 쓸만한 결과를 반환합니다.
const d = new Date();           // 현재 날짜
console.log(d.toString());

// 배열 객체의 toString()도 쓸만한 결과를 반환합니다.
// 각 요소를 문자열로 바꾼 다음, 쉼표로 연결한 문자열을 반환합니다.
const arr = [1, true, "hello"];
console.log(arr.toString());    // 1,true,hello

// 하지만 대부분의 객체는 아무짝에도 쓸모없는 문자열 "[object Object]" 을 반환합니다.
const obj = {};
obj.color = "yellow";
console.log(obj.toString());    // [object Object]
console.log(obj);               // { color: 'yellow' }

// 객체의 toString()메소드를 수정해서 더 유용한 문자열을 반환하게 할 수 있습니다.
// 9장에서 설명