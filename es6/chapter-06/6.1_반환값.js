// [함수 호출도 표현식]이고, 표현식은 값이 됩니다.
// 그러면 함수 호출의 값은 무엇일까요? => "반환 값" 입니다.
// 함수 바디 안에 return 키워드를 사용하면 함수를 즉시 종료하고 값을 반환합니다.
function getGreeting(params) {
    return "Hello world!";
}

console.log(getGreeting());     // Hello world!"

// return을 명시적으로 호출하지 않으면 반환 값은 undefined가 됩니다.