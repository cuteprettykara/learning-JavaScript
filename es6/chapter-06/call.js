// 함수를 어디서, 어떻게 호출했느냐와 관계없이, this가 무엇인지 [지정]할 수 있습니다.
const bruce = {name: "Bruce"};
const madeline = {name: "Madeline"};

// 이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용합니다.
function greet() {
    return `Hello, I'm ${this.name}!`;
}

console.log(greet());               // "Hello, I'm undefined!"  : this는 어디에도 묶이지 않았습니다.
console.log(greet.call(bruce));     // "Hello, I'm Bruce!"      : this는 bruce입니다.
console.log(greet.call(madeline));  // "Hello, I'm Madeline!"   : this는 madeline입니다.

// 함수르르 호출하면서 call을 사용하고, this로 사용할 객체를 넘기면
// 해당 함수가 [주어진 객체의 메소드인 것처럼] 사용할 수 있습니다.