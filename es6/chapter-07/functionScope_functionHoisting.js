// var로 선언한 변수와 마찬가지로, 함수 선언도 스코프 맨 위로 끌어올려집니다.
// f();                    // 'f'
// function f() {
//     console.log('f');
// }

// 변수에 할당한 함수 표현식은 끌어올려지지 않습니다.
// 이들은 변수의 스코프 규칙을 그대로 따릅니다.
f();                    // ReferenceError: f is not defined
let f = function() {
    console.log('f');
};
