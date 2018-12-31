// unique란 단어가 들어가 있는 문단을 모두 하이라이트 하고 싶다면 먼저 CSS 클래스를 만듭니다.
// .highlight {
//     background: #ff0;
//     font-style: italic;
// }

// 그리고 <p>태그를 모두 찾은 다음, unique가 들어있다면 highlight 클래스를 추가합니다.
// 모든 요소에는 클래스를 나열하는 classList 프로퍼티가 있습니다.
// classList의 add 메소드로 클래스를 추가할 수 있습니다.
// 이 예제는 이번 장에서 다시 사용할 테니 highlightParas 함수를 만듭니다.
function highlightParas(containing) {
    if (typeof containing === 'string') 
        containing = new RegExp(`\\b${containing}\\b`, 'i');
    
    const paras = document.getElementsByTagName('p');
    console.log(paras);
    for (const p of paras) {
        if (!containing.test(p.textContent)) continue;
        p.classList.add('highlight');
    }
}
// highlightParas('unique');

// 클래스를 제거할 때는 classList.remove를 사용합니다.
function removeParaHighlights() {
    const paras = document.querySelectorAll('p.highlight');
    for (const p of paras) {
        p.classList.remove('highlight');
    }
}