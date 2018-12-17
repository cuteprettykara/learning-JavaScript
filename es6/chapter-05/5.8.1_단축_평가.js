// AND연산에서 두 값을 모두 평가하지 않아도 될 때가 있다.
// x가 '거짓 같은 값'이면 x && y의 값을 평가할 필요도 없이 false입니다.
// 마찬가지로 x || y에서 x가 '참 같은 값'이면  y의 값을 평가할 필요도 없이 true입니다.

// 자바스크립트는 정확히 이런 방식으로 동작하며, 이런 동작을 단축 평가(short-circuit evaluation)라고 합니다.

// 단축 평가가 중요한 이유가 뭘까요?
// 두 번째 피연산자에 부수 효과(side effect)가 있다 하더라도
// 단축 평가를 거치면 그 효과는 일어나지 않기 때문입니다.
// 부수 효과는 보통 부정적인 의미로 쓰이지만 항상 그런 건 아닙니다.
// 결과가 의도적이고 명확하다면 나쁘게 평가할 이유는 없습니다.

// 표현식에서 부수 효과는 증가,감소,할당,함수 호출에서 일어날 수 있습니다.
// 예제를 봅시다. 여기서는 증가 연산이 부수 효과입니다.
const skipIt = true;
let x = 0;
const result = skipIt || x++;
console.log(result);    // true
console.log(x);         // 0

// 3행에서 단축 평가가 일어나므로 증가연산자에 해당하는 표현식은 실행되지 않고, x의 값은 그대로 0입니다.

// AND에서도 같은 일이 일어날 수 있습니다.
const doIt = false;
let x = 0;
const result = doIt && x++;
console.log(result);    // false
console.log(x);         // 0

// doIt을 true로 바꾸면 어떻게 될까요?
const doIt = true;
let x = 0;
const result = doIt && x++;
console.log(result);    // [0]
console.log(x);         // 1

// 자바스크립트는 두 피연산자를 모두 평가해야 하므로 증가 연산이 일어나고 result는 0이 됩니다.
// 잠깐 뭐라구요? result가 false가 아니라 0이라구요?
// 이 질문에 대한 답이 다음 섹션의 내용입니다.