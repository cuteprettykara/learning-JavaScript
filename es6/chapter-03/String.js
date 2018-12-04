const s = "hello";

// 자바스크립트는 일시적인 String 객체를 만들고,

console.log(s.toUpperCase());


// 자바스크립트는 함수를 호출하는 즉시, 임시 객체를 파괴합니다.
s.rating = 3;
console.log(s.rating);