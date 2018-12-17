// 객체의 프로퍼티인 함수를 메소드(method)라고 불러서 일반적인 함수와 구별합니다.

// 함수를 다른 객체에 추가할 수 있다는 것은 3장에서 이미 봤습니다.
// 객체 리터럴에도 메소드를 추가할 수 있습니다.
const o = {
    name: "Wallace",                        // 원시 값 프로퍼티
    bark: function() { return 'Woof!'; }    // 함수 프로퍼티(=메소드)
}

// ES6에서는 간편하게 메소드를 추가할 수 있는 문법이 새로 생겼습니다.
const o = {
    name: "Wallace",                        // 원시 값 프로퍼티
    bark() { return 'Woof!'; }              // 함수 프로퍼티(=메소드)
}