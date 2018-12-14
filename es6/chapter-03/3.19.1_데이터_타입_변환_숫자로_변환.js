// 방법1 : Number() 객체 생성자 사용
const numStr = "33.3";
const num = Number(numStr); // new()를 사용하지 않습니다.

console.log(num);

// 방법2 : parseInt(), parseFloat() 내장 함수를 사용
const a = parseInt("16 volts", 10);     // 10진수 16
const b = parseInt("3a", 16);           // 16진수 3a
const c = parseFloat("15.5 kph");       // parseFloat()는 항상 기수가 10이라고 가정합니다.

console.log(a); // 16
console.log(b); // 58
console.log(c); // 15.5

// Date 객체를 숫자로 : valueOf() 메서드 사용
const d = new Date();       // 현재 날짜
const ts = d.valueOf();     // UTC 1970년 1월 1일 자정으로부터 몇 밀리초가 지났는지 나타내는 숫자

console.log(ts);            // 1544755844087

// 불리언 값을 1이나 0으로 바꿔야 할 때는 조건 연산자를 사용
const e = true;
const n = e ? 1 : 0;

console.log(n); // 1



// Object.prototype.valueOf()
// JavaScript는 객체를 원시 값으로 변환할 때 valueOf 메서드를 호출합니다. 
// 보통 원시 값을 필요로 할 때 알아서 사용하므로 직접 호출해야 하는 경우는 매우 드뭅니다.

// 기본적으로 Object의 모든 후손 객체는 valueOf를 상속받습니다. 
// 내장된 핵심 객체는 모두 valueOf를 재정의(override)해 적합한 값을 반환합니다. 
// 어떤 객체가 [원시 값을 가지고 있지 않다면], valueOf는 [객체 스스로를 반환]합니다.

// 사용자 정의 객체를 만들 땐 valueOf를 재정의해 Object의 메서드 대신 다른 행동을 부여할 수도 있습니다.