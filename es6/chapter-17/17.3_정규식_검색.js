// 예제로 사용할 정규식은 /\w{3,}/ig 입니다.
// 세 글자 이상인 단어에 모두 일치하고, 대소문자는 가리지 않습니다.
// 먼저 검색하는 방법을 알아봅시다.
const input = "As I was going to Saint Ives";
const re = /\w{3,}/ig;

// 문자열(input)의 메소드를 사용할 때
console.log(input.match(re));   // [ 'was', 'going', 'Saint', 'Ives' ]
console.log(input.search(re));  // 5 (세 글자 이상으로 이루어진 첫 단어의 인덱스는 5입니다.)
console.log('***********************************************');

// 정규식(re)의 메소드를 사용할 때
console.log(re.exec(input));    // 처음 일치하는 것 -- ["was", index: 5, ...]
console.log(re.exec(input));    // exec는 마지막 위치를 '기억'합니다. -- ["going", index: 9, ...]
console.log(re.exec(input));    // ["Saint", index: 18, ...]
console.log(re.exec(input));    // ["Ives", index: 24, ...]
console.log(re.exec(input));    // null -- 일치하는 것이 더는 없습니다.

console.log(re.test(input));    // true (input에는 세 글자 이상으로 이루어진 단어가 한 개 이상 있습니다.)
console.log('***********************************************');

// 위 예제는 모두 정규식 리터럴을 그대로 써도 됩니다.
console.log(input.match(/\w{3,}/ig));
console.log(input.search(/\w{3,}/ig));
console.log(/\w{3,}/ig.exec(input));
console.log(/\w{3,}/ig.test(input));

// 이중 가장 많은 정보를 제공하는 것은 exec 메소드지만, 현실적으로는 아마 가장 적게 쓰는 메소드일 겁니다.
// match와 test를 가장 많이 쓰는 편입니다.