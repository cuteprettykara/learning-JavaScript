// 자바스크립트 배열은 특수한 [객체]입니다.
// 일반적인 객체와 달리 배열 콘텐츠에는 항상 
// 1. [순서]가 있고, 
// 2. [키]는 순차적인 [숫자]입니다.

// 자바스크립트 배열은 C 언어의 indexed array + 동적 배열 + linked list 을 혼합한 것

// 배열의 특징
// 1. 배열 크기는 고정되지 않습니다. 언제든 요소의 추가/제거가 가능
// 2. 요소의 데이터 타입을 가리지 않습니다.
// 3. 배열 요소는 0으로 시작합니다.
// 4. Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete
//    => Using delete may leave undefined holes in the array.