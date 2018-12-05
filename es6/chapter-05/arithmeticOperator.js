const s = "5";
const z = 3 + +s;

// y는 8입니다. 단항 플러스를 사용하지 않았다면
// 문자열 병합이 일어나서 결과는 "35"가 됩니다.
console.log(z);


// 여기서는 굳이 단항 플러스가 필요하지 않지만 세로로 줄을 잘 맞출 수 있습니다.
/* const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33;
const p1 = -x1*1;
const p2 = +x2*2;
const p3 = +x3*3;
const p4 = -x4*4;

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
 */

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