// 그룹을 사용하면 역참조(backreference)라는 테크닉도 쓸 수 있습니다.
// 유용한 예제를 보기 전에 먼저 인위적인 예제를 하나 봅시다.

// XYYX 형태의 밴드 이름을 찾고 싶다고 합시다.
// PJJP, GOOG, ANNA 등이 해당되겠죠. 역참조를 이런 경우에 유용하게 쓸 수 있습니다.
// 서브그룹을 포함해, 정규식의 각 그룹은 숫자를 할당받습니다.
// 숫자는 맨 왼쪽이 1번에서 시작해 오른쪽으로 갈수록 1씩 늘어납니다.
// 역슬래시 뒤에 숫자를 써서 이 그룹을 참조할 수 있습니다.
// 즉 \1은 맨 처음 일치한 그룹입니다.
const promo = "Opening for XAAX is the dynamic GOOG! At the box office now!";
const brands = promo.match(/([A-Z])([A-Z])\2\1/g);
console.log(brands);    // [ 'XAAX', 'GOOG' ]

// 별로 쓸모가 없을 것 같죠?]
// 필자가 실무에서 역참조를 사용하는 것은 따옴표의 짝을 맞출 때뿐입니다.

// 큰 작은 옴표와 큰 따옴표를 모두 썼으므로 백틱으로 문자열 경계를 나타냈습니다.
const html = `<img alt='A "simple" example.'>` +
    `<img alt="Don't abuse it!">`;
const matches = html.match(/<img alt=(['"]).*?\1/g);
console.log(matches);   // [ '<img alt=\'A "simple" example.\'', '<img alt="Don\'t abuse it!"' ]

// 이 예제는 좀 지나치게 단순화한 겁니다.
// 다른 속성이 alt 속성보다 앞에 있거나, alt 앞에 공백이 두 개 이상이라면 
// 이 정규식으로는 아무것도 찾지 못합니다.
// 나중에 이 예제를 다시 살펴보면서 그 문제를 해결할 겁니다.

// 따옴표 뒤에 0개 이상의 문자를 찾습니다.
// 물음표를 썼으므로 소극적으로 일치해서, 두 번째 <img>까지 진행하는 일은 없습니다.

// [적극적 일치를 썼을 경우]
const matches2 = html.match(/<img alt=(['"]).*\1/g); 
console.log(matches2);
// [ '<img alt=\'A "simple" example.\'><img alt="Don\'' ]
