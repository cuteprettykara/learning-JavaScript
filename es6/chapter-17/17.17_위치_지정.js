// 문자열을 다루다 보면 '~~으로 시작하는 문자열', '__으로 끝나는 문자열', '그 문자열의 처음'
// 하는 식으로 생각하게 될 때가 아주 많습니다. 여기서 ~~, __ 을 정규식의 앵커(anchor)라고 부릅니다.
// 앵커에는 두 가지 종류가 있습니다.
// * ^ : 문자열의 처음
// * $ : 문자열의 마지막
const input = "It was the best of times, it was the worst of times";

const beginning =  input.match(/^\w+/g);
console.log(beginning);     // [ 'It' ]

const end =  input.match(/\w+$/g);
console.log(end);           // [ 'times' ]

const everything =  input.match(/^.*$/g);
console.log(everything);    // input과 같습니다.

const nomatch1 =  input.match(/^best/ig);

console.log(nomatch1);      // null

const nomatch2 =  input.match(/worst$/ig);
console.log(nomatch2);      // null

// 그런데 앵커에는 특이한 기능이 있습니다.
// 문자열에 줄바꿈 문자가 들어있다면 각 줄의 처음과 끝을 찾을 수 있습니다.
//  각 줄의 처음과 끝을 찾으려면 m 플래그를 쓰면 됩니다.
const input2 = "One line\nTwo lines\nThree lines\nFour lines";

const beginnings = input2.match(/^\w+/mg);
console.log(beginnings);    // [ 'One', 'Two', 'Three', 'Four' ]

const endings =  input2.match(/\w+$/mg);
console.log(endings);       // [ 'line', 'lines', 'lines', 'lines' ]
