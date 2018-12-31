// getElementById, getElementsByClassName, getElementsByTagName도 유용하긴 하지만,
// * id나 클래스, 태그 이름 같은 한 가지 조건이 아니라
// * 다른 요소와의 관계를 사용해 

// 원하는 요소를 찾는 훨씬 더 강력하고 범용적인 메소드도 있습니다.
// querySelector와 querySelectorAll은 CSS 선택자를 사용해 요소를 찾는 메소드입니다.

// [DOM에서의 위치와 관계 없이 찾을 때]
// * 요소 이름으로 찾을 때 : 꺽쇠 없이 요소 이름만 씁니다. 
// * 클래스 이름으로 찾을 때 : 클래스 이름 앞에 점을 찍습니다.
const results1 = document.querySelectorAll('.callout');
console.log(results1);      // NodeList가 반환됩니다.

// [DOM에서의 위치를 기준으로 찾을 때]
// * 요소선택자 사이에 스페이스를 넣으면 특정 요소의 자손인 요소를 찾을 수 있습니다.
const results2 = document.querySelectorAll('#content p');
console.log(results2);

// * 요소선택자 사이에 > 기호를 넣으면 특정 요소의 자식만 찾습니다.
const results3 = document.querySelectorAll('#content > p');
console.log(results3);

// * 자손 선택자와 자식 선택자를 함께 써도 됩니다.
//   ex) document.querySelectorAll('body .content > p);

// [CSS 선택자 전체]
// http://mzl.la/1Pxcg2f