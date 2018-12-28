// 지금까지 우리는 문자 단 한 개에 일치하는 것들을 주로 봤습니다.
// 반복을 사용하면 여러 개를 찾을 수 있지만, 그렇다고 해도 문자 하나를 반복하는 것이었죠.
// 그룹을 사용하면 [하위 표현식]을 만들고 [단위 하나로 취급]할 수 있습니다.

// 그룹을 사용하면 그 그룹에 일치하는 결과를 나중에 쓸 수 있도록 캡처(capture)할 수도 있습니다.
// 결과를 캡처하는 것이 기본값이지만, 캡처하지 않는 그룹도 만들 수 있습니다.
// 필자는 [캡처하지 않는 그룹부터] 설명하려고 합니다.

// 기본적으로 캡처하지 않는 그룹을 사용하길 권합니다.
// 캡처하지 않는 그룹을 사용하면 [성능상 장점]이 있습니다.
// 일치하는 결과를 나중에 쓸 필요가 없다면 캡처하지 않는 그룹을 써야 합니다.

// 그룹은 괄호로 만듭니다. 캡처하지 않는 그룹은 (?:[subexpression]) 형태이고,
// 여기서 [subexpression]이 일치시키려 하는 패턴입니다.

// 도메인 이름을 찾으려 하지만, .com, .org, .edu만 찾는다고 합시다.
const text = "Visit oreilly.com today!";
const match = text.match(/[a-z]+(?:\.com|\.org|\.edu)/ig);
console.log(match);     // [ 'oreilly.com' ]

// 그룹에도 반복을 적용할 수 있습니다.
// 일반적으로 반복은 반복 메타 문자의 바로 왼쪽에 있는 문자 하나에 적용되지만,
// 그룹을 사용하면 그룹 전체에 반복을 적용합니다.
// http://, https://, //(프로토콜 독립적 URL)로 시작하는 URL을 찾으려 한다면
// 그룹과 함께 0 또는 1개에 일치하는 메타 문자 ?를 쓰면 됩니다.
const html = '<link rel="stylesheet" href="http://insecure.com/stuff.css">\n' +
    '<link rel="stylesheet" href="https://secure.com/securestuff.css">\n' +
    '<link rel="stylesheet" href="//anything.com/flexible.css">';

const matches = html.match(/(?:https?)?\/\/[a-z][a-z0-9-]+[a-z0-9]+/ig);
console.log(matches);       // [ '//insecure', '//secure', '//anything' ]

// 도메인 이름에는 글자와 숫자, 하이픈이 들어갈 수 있지만,
// 시작은 글자여야 하고, 하이픈으로 끝날 수는 없습니다.

// 이 예제는 완벽하지 않습니다.
// //gotcha같은, 최상위 도메인이 없는 URL에도 일치합니다.
// 하지만 완벽히 유효한 URL에만 일치하는 정규식을 만드는 것은 훨씬 더 복잡합니다.

// 모든 경우의 수를 고려하는 완벽한 정규식을 만들겠다는 환상에 빠지지 마십시오.
// 거의 불가능할뿐 아니라, 설령 가능하다 해도 불필요한 일입니다.