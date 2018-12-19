// findIndex는 일치하는 것을 찾지 못했을 때 -1을 반환한다는 점에서는 indexOf와 비슷하지만,
// 보조함수를 써서 검색 조건을 지정할 수 있으므로 indexOf보다 더 다양한 상황에서 활용할 수 있습니다.

// 하지만 findIndex는 검색을 [시작할 인덱스를 지정할 수 없고],
// 뒤에서부터 찾는 findLastIndex 같은 짝도 없습니다.
const arr = [
    {id: 5, name: "Judith"},
    {id: 7, name: "Francis"}
];

console.log(arr.findIndex(o => o.id === 5));            // 0
console.log(arr.findIndex(o => o.name === "Francis"));  // 1
console.log(arr.findIndex(o => o === 3));               // -1
console.log(arr.findIndex(o => o.id === 17));           // -1