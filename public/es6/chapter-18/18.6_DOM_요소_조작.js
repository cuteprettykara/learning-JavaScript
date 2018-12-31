// 요소를 찾는 방법은 알았는데, 찾은 요소로 무엇을 할 수 있을까요?
// 콘텐츠 수정부터 시작해봅시다.

// textContent는 HTML 태그를 모두 제거하고 순수한 텍스트 데이터만 제공.
// innerHTML은 HTML 태그를 그대로 제공
const para1 = document.getElementsByTagName('p')[0];
console.log(para1.textContent); // This is a simple HTML file.
console.log(para1.innerHTML);   // This is a <i>simple</i> HTML file.

// 예제 HTML의 첫 번째 문단에 접근하고 수정해 봅시다.
// para1.textContent = "Modified HTML file";
para1.innerHTML = "<strong>Modified</strong> HTML file";