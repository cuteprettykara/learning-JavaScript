// 방법1 : Number() 객체 생성자 사용
const numStr = "33.3";
const num = Number(numStr);

console.log(num);

// 방법2 : parseInt(), parseFloat() 내장 함수를 사용
const a = parseInt("16 volts", 10);     // 10진수 16
const b = parseInt("3a", 16);           // 16진수 3a
const c = parseFloat("15.5 kph");       // parseFloat()는 항상 기수가 10이라고 가정합니다.

console.log(a);
console.log(b);
console.log(c);

// 방법3 : valueOf() 메서드 사용
const d = new Date();       // 현재 날짜
const ts = d.valueOf();     // UTC 1970년 1월 1일 자정으로부터 몇 밀리초가 지났는지 나타내는 숫자

console.log(ts);

// 불리언 값을 1이나 0으로 바꿔야 할 때는 조건 연산자를 사용
const e = true;
const n = e ? 1 : 0;

console.log(n);