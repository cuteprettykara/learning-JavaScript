// 문자열을 인코딩하지 않고 valueOf()메소드로 얻은 숫자를 그냥 전송해도 됩니다.
const before = { d:new Date().valueOf() };
console.log(before);
console.log(typeof before.d);           // "number"
const json = JSON.stringify(before);
console.log(json);
console.log('****************************************');

const after = JSON.parse(json);
console.log(after);
console.log(typeof after.d);            // "number"

// 자바스크립트에서는 JSON으로 인코딩된 날짜 문자열을 일관되게 처리하지만,
// 다른 언어나 운영체제에서 제공하는 JSON 라이브러리는 그렇지 않습니다.
// 특히 .NET JSON직렬화기는 JSON으로 인코딩된 날짜 객체를 자신만의 형식으로 감싸(warp)버립니다.
// 따라서 자바스크립트가 아닌, 다른 시스템과 날짜 데이터를 주고 받을 때는
// 그 시스템에서 날짜를 어떻게 직렬화하는지 알아둬야 합니다.

// 이런 상황에서는 유닉스 타임스탬프를 주고 받는 편이 더 안전합니다.
// 하지만 유닉스 타임스탬프를 주고 받을 때도 한 가지 조심할 것이 있습니다.
// 숫자형 값을 밀리초가 아니라 초 기준으로 해석하는 라이브러리도 많습니다.