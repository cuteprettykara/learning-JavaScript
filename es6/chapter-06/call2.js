// call의 첫 번째 매개변수는 this로 사용할 값이고,
// 매개변수가 더 있으면, 그 매개변수는 호출하는 함수로 전달됩니다.
const bruce = {name: "Bruce"};
const madeline = {name: "Madeline"};

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');     // {name: "Bruce", birthYear: 1949, occupation: "singer"};
update.call(madeline, 1942, 'actress'); // {name: "Madeline", birthYear: 1942, occupation: "actress"};

console.log(bruce);
console.log(madeline);