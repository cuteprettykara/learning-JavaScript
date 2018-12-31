/* function printDOM(node, prefix) {
    console.log(prefix + node.nodeName);
    for (let i = 0; i < node.childNodes.length; i++) {
        printDOM(node.childNodes[i], prefix + '\t');
    }
}

printDOM(document, ''); */

const content = document.getElementById('content');
console.log(content);

const callouts = document.getElementsByClassName('callout');
console.log(callouts);

const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

// DOM 메소드가 반환하는 컬렉션은 자바스크립트 배열이 아니라, HTMLCollection의 인스턴스로, [배열 비슷한] 객체입니다.

// 이 컬렉션에 for루프를 사용할 수는 있지만
// * map,
// * filter,
// * reduce
// 같은 Array.prototype 메소드는 사용할 수 없습니다.

// [...document.getElementsByTagName(p)]처럼 확산 연산자를 써서 HTMLCollection을 [배열로] 바꿀 수 있습니다.
