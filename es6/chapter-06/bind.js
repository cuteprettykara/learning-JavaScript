// bind를 사용하면 함수의 this값을 영구히 바꿀 수 있습니다.
const bruce = {name: "Bruce"};
const madeline = {name: "Madeline"};

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

const updateBruce = update.bind(bruce);

updateBruce(1904, "actor");
console.log(bruce);  // {name: "Bruce", birthYear: 1904, occupation: "actor"}

updateBruce.call(madeline, 1274, "king");
console.log(bruce);     // {name: "Bruce", birthYear: 1274, occupation: "king"}
console.log(madeline);  // {name: "Madeline"} : madeline은 변하지 않았습니다.