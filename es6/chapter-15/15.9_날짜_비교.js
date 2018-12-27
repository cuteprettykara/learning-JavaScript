// Date 인스턴스는 날짜를 숫자로 저장하므로, 숫자에 쓸 수 있는 비교 연산자를 그대로 쓰면 됩니다.
const d1 = new Date(1996, 2, 1);
const d2 = new Date(2009, 4, 27);

console.log(d1 > d2);   // false
console.log(d1 < d2);   // true