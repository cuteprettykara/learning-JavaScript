// 매우 자주 쓰이는 문자셋은 단축 표기가 따로 있습니다.
// 이들을 [클래스]라 부르기도 합니다.

// \d = [0-9]
// \D = [^0-9]
// \s = [\t\v\n\r]
// \S = [^\t\v\n\r]
// \w = [a-zA-Z0-9_]
// \W = [^a-zA-Z0-9_]

// 가장 많이 쓰이는 것은 아마 공백문자셋 \s 일겁니다.
// 공백을 써서 줄을 맞출 때가 많습니다. 이런 파일을 프로그램으로 분석하려면
// 스페이스 몇 칸이 들어갔든 관계없이 필요한 내용을 찾을 수 있어야 합니다.
const stuff = 
    `height:        9\n` +
    `medium:        5\n` +
    `low:           2\n`;

// const levels = stuff.match(/:\s*[0-9]/g);
const levels = stuff.match(/:\s*\d/g);
console.log(levels);        // [ ':        9', ':        5', ':           2' ]

// 이때 \s뒤의 *는 '숫자는 상관없으며 없어도 된다'는 의미입니다.

// 문자 제외 클래스 \D, \S, \W 의 가능성을 과소평가하지 마십시오.
// 이들 클래스를 사용하면 원치 않는 문자들을 빠르고 효율적으로 제거할 수 있습니다.
// 예를 들어 전화번호를 데이터베이스에 저장하기 전에 형식을 통일하는 편이 좋습니다.
const messyPhone = '(505) 555-1515';
const neatPhone = messyPhone.replace(/\D/g, '');
console.log(neatPhone);     // "5055551515"

// 비슷한 예로, required 필드(공백이 아닌 글자가 최소한 하나는 있어야 하는 필드)에 
// 데이터가 있는지 검사할 때 종종 \S를 쓰곤 합니다.
const field1 = '   someting    ';
const field2 = '       ';

const valid1 = /\S/.test(field1);
const valid2 = /\S/.test(field2);

console.log(valid1);        // true
console.log(valid2);        // false
