// ES6에서 도입한 fill은 환영할만한 좋은 메소드입니다.
// 이 메소드는 정해진 값으로 배열을 채웁니다.
// 크기를 지정해서 배열을 생성하는 [Array 생성자와 잘 어울립니다].

// 배열의 일부만 채우려 할 때는 시작 인덱스와 끝 인덱스를 지정하면 됩니다.
// 음수 인덱스도 사용할 수 있습니다.

const arr = new Array(5).fill(1);   // arr이 [1, 1, 1, 1, 1]로 초기화됩니다.

console.log(arr.fill("a"));         // arr은 이제 ["a", "a", "a", "a", "a"] 입니다.
console.log(arr.fill("b", 1));      // arr은 이제 ["a", "b", "b", "b", "b"] 입니다.
console.log(arr.fill("c", 2, 4));   // arr은 이제 ["a", "b", "c", "c", "b"] 입니다.
console.log(arr.fill(5.5, -4));     // arr은 이제 ["a", 5.5, 5.5, 5.5, 5.5] 입니다.
console.log(arr.fill(0, -3, -1));     // arr은 이제 ["a", 5.5, 0, 0, 5.5] 입니다.