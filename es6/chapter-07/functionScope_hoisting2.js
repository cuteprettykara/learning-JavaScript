// var를 이용해 변수를 선언하면 자바스크립트는 같은 변수를 여러 번 정의하더라도 무시합니다.
// 원래 코드
var x = 3;
if (x === 3) {
    var x = 2;
    console.log(x); // 2
}
console.log(x);     // 2



// 자바스크립트가 해석한 코드
var x;
x = 3;
if (x === 3) {
    x = 2;
    console.log(x); // 2
}
console.log(x);     // 2



// 이 예제를 보면 같은 함수나 전역 스코프 안에서는 
// * var로 새 변수를 만들 수 없으며,
// * let으로 가능했던 변수 숨김(variable masking)도 불가능함을 알 수 있습니다.