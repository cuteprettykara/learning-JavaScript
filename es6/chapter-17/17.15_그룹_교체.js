// 그룹을 사용하면 문자열 교체도 더 다양한 방법으로 할 수 있습니다.
// 이번에도 HTML을 예로 들겠습니다.
// <a> 태그에서 href가 아닌 속성을 전부 제거하고 싶다고 합시다.
let html = '<a class="nope" href="/yep">Yep</a>';
html = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');
console.log(html);  // <a href="/yep">Yep</a>

// 이 정규식은 href 속성의 값에 작은 따옴표를 쓴 문자열에서는 아무것도 찾지 못합니다.

// 좀 더 복잡한 예제를 봅시다.
// class 속성과 href 속성을 남기고, 나머지는 모두 없애고 싶습니다.
let html2 = '<a class="yep" href="/yep" id="nope">Yep</a>';
html2 = html2.replace(/<a .*?(class=".*?").*?(href=".*?").*?>/, '<a $2 $1>');
console.log(html2); // <a href="/yep" class="yep">Yep</a>

// 이 정규식에서는 class와 href의 순서를 바꾸므로 결과 문자열에서는 href가 앞에 옵니다.
// 이 정규식은 class 뒤에 href가 있어야만 동작하고, 앞에서와 마찬가지로 속성 값에 
// 작은 따옴표를 쓰면 동작하지 않습니다. 다음 섹션에서 더 좋은 방법을 알아볼 겁니다.

// $1, $2 등 숫자로 참조하는 것 외에도
// * 일치하는 것 앞에 있는 전부를 참조하는 $`,
// * 일치하는 것 자체인 $&,
// * 일치하는 것 뒤에 있는 전부를 참조하는 $'
// * 달러 기호 자체가 필요한 때는 $$
const input = "One two three";
console.log(input.replace(/two/, '($`)'));  // One (One ) three
console.log(input.replace(/two/, '($&)'));  // One (two) three
console.log(input.replace(/two/, "($')"));  // One ( three) three
console.log(input.replace(/two/, "($$)"));  // One ($) three