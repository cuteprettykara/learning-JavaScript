// indexOf와 findIndex는 조건에 맞는 요소의 인덱스를 찾을 때 알맞지만,
// 조건에 맞는 요소의 인덱스가 아니라, 요소 자체를 원할 때는 find를 사용합니다.
// find는 findIndex와 마찬가지로 검색 조건을 함수로 전달할 수 있습니다.
// 조건에 맞는 요소가 없을 때는 undefined를 반환합니다.
const arr = [
    {id: 5, name: "Judith"},
    {id: 7, name: "Francis"}
];

console.log(arr.find(o => o.id === 5));     // {id: 5, name: "Judith"}
console.log(arr.find(o => o.id === 2));     // undefined
