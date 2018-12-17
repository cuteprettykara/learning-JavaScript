// ES5에서는 매개변수에 기본값(default value)을 지정하는 기능도 추가됐습니다.
function f(a, b="default", c=3) {
    return `${a} - ${b} - ${c}`;
}

console.log(f(5, 6, 7));    // "5 - 6 - 7"
console.log(f(5, 6));       // "5 - 6 - 3"
console.log(f(5));          // "5 - default - 3"
console.log(f());           // "undefined - default - 3"
