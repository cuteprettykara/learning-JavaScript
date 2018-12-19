// concat에 배열을 넘기면, [배열을 분해해서] 원래 배열에 추가한 사본을 반환합니다.
// concat은 제공받은 배열을 [한 번만] 분해합니다. 배열 안에 있는 배열을 다시 분해하지는 않습니다.
const arr = [1, 2, 3];

console.log(arr.concat(4, 5, 6));       //  [1, 2, 3, 4, 5, 6]. arr은 바뀌지 않습니다.
console.log(arr.concat([4, 5, 6]));     //  [1, 2, 3, 4, 5, 6]. arr은 바뀌지 않습니다.
console.log(arr.concat([4, 5], 6));     //  [1, 2, 3, 4, 5, 6]. arr은 바뀌지 않습니다.
console.log(arr.concat([4, [5, 6]]));   //  [1, 2, 3, 4, [5, 6]]. arr은 바뀌지 않습니다.