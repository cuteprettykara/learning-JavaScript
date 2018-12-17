// 뺄셈과 단항 부정은 모두 -기호를 사용합니다.
// 단항 부정이 먼저 이루어지고, 그 다음에 뺄셈을 합니다.
// const x = 5;
// const y = 3 - -x;
// console.log(y);     // 8

// 같은 규칙이 단항 플러스에도 적용됩니다.
// 단항 플러스는 자주 사용하는 연산자는 아닙니다.
// 보통 문자열을 숫자로 강제 변환하는 경우이며, 드물게는 세로로 줄을 맞추고 싶을 때 사용합니다.
const s = "5";
const z = 3 + +s;   // z는 8입니다. 단항 플러스를 사용하지 않았다면
console.log(z);     // 문자열 병합이 일어나서 결과는 "35"가 됩니다.


// 여기서는 굳이 단항 플러스가 필요하지 않지만 세로로 줄을 잘 맞출 수 있습니다.
// const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33;
// const p1 = -x1*1;
// const p2 = +x2*2;
// const p3 = +x3*3;
// const p4 = -x4*4;

// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);

// 이 예제에서 단항 부정과 단항 플러스를 변수에만 사용한 이유는,
// 숫자형 리털럴 앞에 있는 -기호는 실제 숫자형 리터럴의 일부로 해석되므로 연산자가 아니기 때문입니다.



// x % y = 피제수(dividend) x 를 제수(divisor) y 로 나눈 나머지
// 나머지 연산자를 음수에 적용하면 결과는 제수(divisor)가 아니라 피제수(dividend)의 부호를 따라가므로, 
// 이 연산자를 진정한 의미의 나머지(modulo) 연산자라 할 수는 없습니다.
console.log(-10 % 3);   // -1

// 나머지 연산자는 보통 정수 피연산자에만 사용하지만,
// 자바스크립트에서는 피연산자에 소수점이 있어도 잘 동작합니다. => ?
console.log(10 % 3.6);  // 2.8 (실제로 나누기 연산을 하면  2.777777777777778)


// 증가 연산자 ++는 할당 연산자 + 덧셈 연산자
// 감소 연산자 --는 할당 연산자 + 뺄셈 연산자
console.log("*************************");
let x = 2;
const r1 = x++ + x++;   // 2 + 3 = 5.   final x = 4;
const r2 = ++x + ++x;   // 5 + 6 = 11.  final x = 6;
const r3 = x++ + ++x;   // 6 + 8 = 14.  final x = 8;
const r4 = ++x + x++;   // 9 + 9 = 18.  final x = 10;

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log("*************************");

let y = 10;
const r5 = y-- + y--;   // 10 + 9 = 19. final y = 8;
const r6 = --y + --y;   //  7 + 6 = 13. final y = 6;
const r7 = y-- + --y;   //  6 + 4 = 10. final y = 4;
const r8 = --y + y--;   //  3 + 3 = 6.  final y = 2;

console.log(r5);
console.log(r6);
console.log(r7);
console.log(r8);