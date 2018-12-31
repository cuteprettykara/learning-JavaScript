// 클릭 이벤트를 통해 하이라이트 버튼과 highlightParas 함수를 연결하겠습니다.
for (const a of highlightActions) {
    a.addEventListener('click', evt => {
        evt.preventDefault();
        highlightParas(a.dataset.containing);
    });
}

const removeHighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');
for (const a of removeHighlightActions) {
    a.addEventListener('click', evt => {
        evt.preventDefault();
        removeParaHighlights();
    });
}

// 이벤트 카테고리
// https://developer.mozilla.org/en-US/docs/Web/Events

// 터치 장치의 터치 이벤트는 마우스 이벤트보다 우선합니다.
// 터치 이벤트를 처리하지 않으면 마우스 이벤트가 발생합니다.