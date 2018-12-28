// HTML 페이지를 문자열에 담았다고 합시다. 이 문자열에서 외부 자원을 가리키는 태그,
// 즉 <a>, <area>, <link>, <script>, <source>, <meta>를 모두 찾고 싶습니다.
// 이 문자열에는 태그의 대소문자가 통일되지 않아서 <Area>, <LINK>같은 태고도 있습니다.
// 어떻게 찾아야 할까요? 정규식에서는 대체(alternation)를 통해 이런 문제를 해결합니다.

const html = 'HTML with <a href="/one">one link</a>, and some JavaScript.<script src="stuff.js"><area/>';
const matches = html.match(/area|a|link|script|source/ig);  // 첫 시도
console.log(matches);           // [ 'a', 'link', 'a', 'a', 'a', 'a', 'Script', 'script', 'area' ]

// 위 예제의 파이프(|)는 대체를 뜻하는 메타 문자입니다.
// ig는 대소문자를 가리지 않고(i) 전체(g)를 검색하라는 뜻입니다.
// g플래그가 없으면 일치하는 것 중 첫 번째만 반환합니다.

// 그런데 area를 a보다 먼저 쓴 이유는 무엇일까요?
// 그건 정규식이 왼쪽에서 오른쪽으로 평가하기 때문입니다.
// a를 먼저 썼다면, 텍스트 안에 area가 있더라도 a를 먼저 소비하므로, 
// 남는 rea는 어느 것에도 일치하지 않습니다.
const matches2 = html.match(/a|area|link|script|source/ig);  // a를 먼저 썼을 때
console.log(matches2);          // [ 'a', 'link', 'a', 'a', 'a', 'a', 'Script', 'script', 'a', 'a' ]

// 따라서 이렇게 겹치는 것이 있을 때는 더 큰 것을 먼저 써야 합니다.
// 작은 것을 먼저 쓰면 큰 것은 절대 찾을 수 없습니다.

// 이 예제를 실행하면 의도하지 않은 것들이 많이 나옵니다.
// <a>안의 link도 나오고, HTML 태그가 아닌 a도 나옵니다.
// <는 정규식 메타 문자가 아니므로 /<area|<a|<link|<script|<source/ 를 써서 해결할 수도 있지만,
const matches3 = html.match(/<area|<a|<link|<script|<source/ig);  // 첫 시도
console.log(matches3);          // [ '<a', '<script', '<area' ]

// 더 좋은 방법이 있습니다.