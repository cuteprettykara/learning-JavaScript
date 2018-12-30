// 단어 경계 일치는 매우 유용한 기능인데도 사용하는 사람이 그리 많지 않은 것 같습니다.
// 단어 경계 메타 문자인 \b와 \B는 앵커와 마찬가지로 입력을 소비하지 않습니다.
// 곧 보겠지만, 입력을 소비하지 않는 것은 매우 유용한 특징입니다.

// 단어 경계는
// * 알파벳 또는 숫자(\w)로 시작하는 부분,
// * 알파벳 또는 숫자가 아닌 문자(\W)로 끝나는 부분,
// * 문자열의 시작이나 끝에 일치합니다.

// ex)  Raindrops on roses, and whiskers on kittens.
// \b: |Raindrops| |on| |roses|, |and| |whiskers| |on| |kittens|.
// \B: R|a|i|n|d|r|o|p|s o|n r|o|s|e|s, a|n|d w|h|i|s|k|e|r|s o|n k|i|t|t|e|n|s.


// 영어 텍스트 안에 있는 이메일 주소를 찾아서 하이퍼링크로 바꾼다고 합시다.
// (이 예제에서는 이메일 주소가 글자로 시작하고 글자로 끝난다고 가정합니다.)
const inputs = [
    "john@doe.com",                 // nothing but the email
    "john@doe.com is my email",     // email at the beginning
    "my email is john@doe.com",     // email at the end
    "use john@doe.com, my email",   // email in the middle, with comma afterward
    "my email:john@doe.com.",       // email surrounded with punctuation
   ];

// 이들 이메일 주소의 공통점은 단어 경계 사이에 있다는 겁니다.
// 단어 경계는 입력을 소비하지 않으므로, 다시 말해 일치하는 이메일 주소인 john@doe.com에서
// j가 보존되고, m 다음의 문자 역시 보존되므로 교체할 문자열에 '다시 넣는' 방법을 생각할 필요가
// 없다는 장점이 있습니다.
const emailMatcher = /\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig;
const result = inputs.map(s => s.replace(emailMatcher, '<a href="mailto:$&">$&</a>'));
console.log(result);

// [결과]
// [ '<a href="mailto:john@doe.com">john@doe.com</a>',
//   '<a href="mailto:john@doe.com">john@doe.com</a> is my email',
//   'my email is <a href="mailto:john@doe.com">john@doe.com</a>',
//   'use <a href="mailto:john@doe.com">john@doe.com</a>, my email',
//   'my email:<a href="mailto:john@doe.com">john@doe.com</a>.' ]