// String.prototype.replace 메소드에도 정규식을 쓸 수 있습니다.
// 네 글자 이상으로 이루어진 단어를 모두 교체하겠습니다.
const input = "As I was going to Saint Ives";

const output = input.replace(/\w{4,}/ig, '****');
console.log(output);    // As I was **** to **** ****