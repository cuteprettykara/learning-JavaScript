// 프락시는 ES6에서 새로 추가된 메타프로그래밍 기능입니다.
// 메타프로그래밍이란 프로그램이 자기 자신을 수정하는 것을 말합니다.
// 객체 프락시는 객체에 대한 작업을 가로채고 필요하다면 작업 자체를 수정하는 기능입니다.
// 프로퍼티 접근을 수정하는 예제를 만들어 봅시다.
const coefficient = {
    a: 1,
    b: 2,
    c: 5
};

// 이 객체의 프로퍼티가 수학의 계수(coefficient)라고 생각해 봅시다.
// 다음과 같은 식으로 사용할 수 있을 겁니다.
function evaluate(x, co) {
    return co.a + co.b * x + co.c * Math.pow(x, 2); 
}

// 지금까지는 좋습니다. 2차 방정식의 계수를 객체에 저장하고, x값이 무엇이든 방정식을 계산할 수 있습니다.
// 그런데 계수 일부가 빠진 객체를 가지고 계산하려면 어떻게 될까요?
const coefficients = {
    a: 1,
    c: 5
};

console.log(evaluate(5, coefficients));         // NaN

// coefficients.b에 0을 할당하면 문제를 해결할 수 있지만, 프락시를 쓰는 방법이 더 낫습니다.
// 프락시는 객체를 대상으로 한 작업을 가로채므로, 정의되지 않은 프로퍼티는 항상 0을 반환하게 만들 수 있습니다.
// coefficients 객체에 프락시를 만듭시다.
const betterCoefficients = new Proxy(coefficients, {
    get(target, key) {
        return target[key] || 0;
    }
});

console.log(evaluate(5, betterCoefficients));   // 126

// Proxy 생성자에 넘기는 첫 번째 매개변수는 [타겟], 즉 프락시할 객체입니다.
// 두 번째 매개변수는 [가로챌 동작]을 나타내는 [핸들러]입니다.
// 여기서는 접근하는 동작만 가로챘으며, get 함수가 핸들러입니다
// (프로퍼티 접근자인 get과는 다릅니다. 이 핸들러는 일반적인 프로퍼티나 접근자 프로퍼티 모두 동작합니다).

// get 함수는 매개변수로 
// * 타겟, 
// * 프로퍼티 키(문자열 또는 심볼), 
// * 수신자(프락시 자체 또는 프락시에서 파생되는 것)를 받습니다.

// 이 예제에서는 해당 키가 타겟에 있는지 확인하고, 없으면 0을 반환합니다.
console.log(betterCoefficients.a);          // 1
console.log(betterCoefficients.b);          // 0
console.log(betterCoefficients.c);          // 5
console.log(betterCoefficients.d);          // 0
console.log(betterCoefficients.anything);   // 0

// betterCoefficients 객체의 프락시에는 무한한 프로퍼티가 있고, 직접 정의한 프로퍼티를 제외하면 
// 모두 값이 0인 것이나 마찬가지입니다.

// 키로 소문자 한 글자를 받았을 때만 프락시가 동작하게 할 수도 있습니다.
const betterCoefficients2 = new Proxy(coefficients, {
    get(target, key) {
        if (!/^[a-z]$/.test(key)) return target[key];
        return target[key] || 0;
    }
});