// bind에 매개변수를 넘기면, 항상 그 매개변수를 받으며 호출되는 새 함수를 만드는 효과가 있습니다.
const bruce = {name: "Bruce"};

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");
console.log(bruce); // {name: "Bruce", birthYear: 1949, occupation: "singer, songwriter"}