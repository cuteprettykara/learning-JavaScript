// 함수 a가 b를 호출하고, 함수 b는 c를 호출한다면
// c가 실행 중일 때는 a와 b는 완료될 수 없습니다.
// 이렇게 완료되지 않은 함수가 쌓이는 것을 호출 스택(call stack)이라 부릅니다.

// c에서 에러가 일어난다면 어떻게 될까요?
// b는 c가 반환하는 값을 사용해야 할 수도 있으므로, b에서도 에러가 일어납니다.
// 따라서 a에서도 에러가 일어납니다.
// 요약하자면, 에러는 [캐치될 때까지] 호출 스택을 따라 올라갑니다.

// 에러는 호출 스택 어디에서든 캐치할 수 있습니다.
// 어디에서도 이 에러를 캐치하지 않으면 자바스크립트 인터프리터는 프로그램을 멈춥니다.
// 이런 것을 '처리하지 않은(unhandled) 예외', '캐치하지 않은(uncaught) 예외' 라고 부르며
// 프로그램이 충돌하는 원인이 됩니다.

// 에러를 캐치하면 호출 스택에서 문제 해결에 유용한 정보를 얻을 수 있습니다.
// 예를 들어 함수 a가 b를 호출하고, b가 호출한 c에서 에러가 일어났다면,
// 호출 스택은 c에서 일어난 에러를 보고하는데 그치지 않고, 
// b가 c를 호출했으며, b는 a에서 호출했다는 것도 함께 알려줍니다.
// [프로그램 여기저기에서 함수 c를 호출할 수 있으므로], 이런 정보는 디버그에 유용하게 쓸 수 있습니다.

// 대부분의 자바스크립트 환경에서 Error 인스턴스에는 [스택을 문자열로 표현한] stack 프로퍼티가 있습니다.
// 이 기능은 자바스크립트 표준은 아니지만 대부분의 환경에서 지원합니다.
function a() {
    console.log(`a: calling b`);
    b();
    console.log(`a: done!!!`);
}
function b() {
    console.log(`b: calling c`);
    c();
    console.log(`b: done!!!`);
}
function c() {
    console.log(`c: throwing error`);
    throw new Error('c error');
    console.log(`c: done!!!`);
}
function d() {
    console.log(`d: calling c`);
    c();
    console.log(`d: done!!!`);
}

try {
    a();
} catch (error) {
    console.log(error.stack);
}

try {
    d();
} catch (error) {
    console.log(error.stack);
}

// [firefox 실행 화면]
// a: calling b 
// b: calling c 
// c: throwing error 
// c@debugger eval code:13:11
// b@debugger eval code:8:5
// a@debugger eval code:3:5
// @debugger eval code:23:5

// d: calling c 
// c: throwing error 
// c@debugger eval code:13:11
// d@debugger eval code:18:5
// @debugger eval code:29:5

// @ 기호가 있는 행은 스택 추적이며 '가장 깊은' 함수(c)에서 시작하고, 함수가 남지 않았을 때(브라우저 자체) 끝납니다.
// 스택 추적 2가지가 나타나 있습니다.
// 하나는 a가 b를, b가 c를 호출했음을 보여주고,
// 다른 하나는 d에서 c를 호출했음을 보여줍니다.