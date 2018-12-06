// apply는 매개변수를 배열로 받는점을 제외하면, call과 똑같습니다.
const bruce = {name: "Bruce"};
const madeline = {name: "Madeline"};

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.apply(bruce, [1955, 'actor']);       // {name: "Bruce", birthYear: 1955, occupation: "actor"};
update.apply(madeline, [1918, 'writer']);    // {name: "Madeline", birthYear: 1918, occupation: "writer"};

console.log(bruce);
console.log(madeline);