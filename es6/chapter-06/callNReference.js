// 함수를 호출하지 않고, [참조만] 할 수 있다는 특징은 자바스크립트를 매우 유연한 언어로 만듭니다.
function getGreeting() {
    return "Hello world!";
}

// 1. 함수를 [변수]에 할당하면 다른 이름으로 호출할 수 있습니다.
const f = getGreeting;
console.log(f());   // "Hello world!"

// 2. 함수를 [객체 프로퍼티]에 할당할 수도 있습니다.
const o = {};
o.f = getGreeting;
console.log(o.f()); // "Hello world!"

// 3. 함수를 [배열 요소]에 할당할 수도 있습니다.
const arr = [1, 2, 3];
arr[1] = getGreeting;
console.log(arr[1]());  // 값 뒤에 ()를 붙이면, 자바스크립트는 (그 값을 함수로 간주)하고 호출합니다.