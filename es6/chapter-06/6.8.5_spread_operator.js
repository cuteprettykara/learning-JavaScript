// ES6의 확산연산자를 사용해도 apply와 같은 결과를 얻을 수 있습니다.

const bruce = {name: "Bruce"};
const newBruce = [1940, "martial artist"];
const arr = [2, 3, -5, 15, 7];

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

// update 메소드는 this값이 중요하므로 call을 사용해야 하지만,
update.call(bruce, ...newBruce);    // apply(bruce, newBruce)와 같습니다.
console.log(bruce);

// Math.min과 Math.max는 this값이 무엇이든 관계없으므로 확산 연산자를 그대로 사용할 수 있습니다.
console.log(Math.min(...arr));
console.log(Math.max(...arr));