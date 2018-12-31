// 요소의 innerHTML 프로퍼티를 바꿔서 DOM 노드를 새로 만들 수 있다는 것은 이미 봤습니다.
// document.createElement 메소드를 써더 새 노드를 만들 수 있습니다.
// 이 함수는 새 요소를 만들지만 DOM에 추가하지는 않습니다.
// DOM에 추가하는 일은 따로 해야 합니다.

// <div id="content"> 요소에 새 문단을 만듭시다.
// 하나는 첫 번째 문단이 되어야 하고, 다른 하나는 마지막 문단이 되어야 합니다.
const p1 = document.createElement('p');
const p2 = document.createElement('p');

p1.textContent = "I was created dynamically!";
p2.textContent = "I was also created dynamically!";

// 메소드를 사용하기 위해서는 부모 DOM 요소와 그 첫 번째 자식을 찾아야 합니다.
const parent = document.getElementById('content');
const firstChild = parent.childNodes[0];

// 이제 새 요소를 삽입할 수 있습니다.
parent.insertBefore(p1, firstChild);
parent.appendChild(p2);