// HTML5에서는 data 속성을 도입했습니다.
// 이 속성을 사용해 HTML 요소에 임의의 데이터를 추가할 수 있습니다.
// 브라우저는 이 데이터를 완전히 무시하므로 자바스크립트에서 쉽게 요소에 관한 정보를
// 읽거나 수정할 수 있습니다.

// HTML을 수정해서 버튼 두 개를 추가합시다.
// 나중에 이 버튼에 highlightParas와 removeParaHighlights 함수를 연결할 겁니다.

// 데이터 속성의 이름은 마음대로 정해도 됩니다.
// document.querySelectorAll을 사용해 action 속성에 "highlight"가 들어 있는 요소를 모두 
// 찾을 수 있습니다.
const highlightActions = document.querySelectorAll('[data-action="highlight"]');

// 이 코드에는 새로운 CSS 선택자가 있습니다.
// 대괄호 문법을 쓰면 어떤 속성으로든 찾을 수 있는데, 여기서는 데이터 속성으로 찾았습니다.

// 버튼이 하나만 있으므로 querySelectorAll 대신 querySelector를 써도 되지만,
// querySelectorAll을 쓰면 여러 요소가 한 가지 기능을 하도록 만들어도 됩니다.
// 같은 페이지에 있는 서로 다른 메뉴, 링크, 툴바 등에서 똑같은 동작이 실행되는 걸 본 적이 있을 겁니다.
// highlightActions의 요소를 보면 dataset 프로퍼티가 있는걸 알 수 있습니다.
console.log(highlightActions[0].dataset);   // DOMStringMap {action: "highlight", containing: "unique"}

// DOMStringMap 이라는 이름에서 짐작할 수 있겠지만 DOM API는 데이터 속성의 값을 문자열 형태로 저장하므로
// 객체 데이터는 저장할 수 없습니다. 제이쿼리에서는 데이터 속성의 기능을 확장하는 인터페이스를 만들어서
// 객체도 데이터 속성에 저장할 수 있게 만들었습니다.(19장)

// 데이터 속성을 수정하거나 데이터를 추가하는 것도 간단합니다.
// 예를 들어 giraffe라는 단어가 들어있는 문단을 하이라이트하되 대소문자를 구분하여 찾으려고 한다면
// 다음과 가이 데이터 속성을 수정할 수 있을 겁니다.
// highlightActions[0].dataset.containing = "giraffe";
// highlightActions[0].dataset.caseSensitive = "true";