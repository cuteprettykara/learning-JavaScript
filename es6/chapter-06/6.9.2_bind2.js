// bind에 [매개변수를 넘기면], 항상 그 매개변수를 받으며 호출되는 [새 함수를 만드는 효과]가 있습니다.
// 예를 들어 bruce가 태어난 해를 항상 1949로 고정하지만, 직업은 자유롭게 바꿀 수 있는 업데이트 함수를 만들고 싶다면
const bruce = {name: "Bruce"};

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");
console.log(bruce); // {name: "Bruce", birthYear: 1949, occupation: "singer, songwriter"}