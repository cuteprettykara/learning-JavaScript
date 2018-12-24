// 하지만 루프에 한 번 쓰고 말 함수에 일일이 이름을 붙이는 건 성가신 일입니다.
// 익명 함수를 만들어 즉시 호출하는 IIFE를 사용하는 게 더 낫습니다.
var i;
for (i = 5; i >= 0; i--) {
    (function (i) {
        setTimeout(function() {
            console.log(i===0 ? "go!" : i);
        }, (5-i)*1000);
    })(i);
}