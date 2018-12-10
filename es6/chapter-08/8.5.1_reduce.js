// 배열의 숫자를 더하는 단순한 예제를 봅시다.
const arr = [5, 7, 2, 4];
const sum = arr.reduce((a, x) => a += x, 0);
console.log(sum);       // 18