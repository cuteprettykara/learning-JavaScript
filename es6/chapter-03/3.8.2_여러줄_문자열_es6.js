/* const multiline = `line1
    line2`; */


/* 문자열 병합을 사용할 때는 따옴표와 백틱을 섞어 써도 괜찮습니다. */
let currentTemp = 19.5;
const multiline = 'Current temperature:\n' +
    `\t${currentTemp}\u00b0C\n` + 
    "Don't worry... the heat is on!";

console.log(multiline);