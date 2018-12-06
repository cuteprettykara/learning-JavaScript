// 함수 바디 안에는 특별한 읽기 전용 값인 this가 있습니다.
// 일반적으로 this는 객체의 프로퍼티인 함수(= 메소드)에서 의미가 있습니다.
const o = {
    name: "Wallace",
    speak() {return `My name is ${this.name}`;}
};

// o.speak()를 호출하면 this는 o에 묶입니다.
console.log(o.speak()); // "My name is Wallace"


// this는 함수를 어떻게 [선언]했느냐가 아니라, 어떻게 [호출]했느냐에 따라 달라집니다.
// 즉, this가 o에 묶인 이유는 
// * speak가 o의 프로퍼티여서가 아니라,
// * o에서 speak를 호출했기 때문입니다.
// 같은 함수를 변수에 할당하면 어떻게 되는지 봅시다.
const speak = o.speak;
console.log(speak === o.speak); // true: 두 변수는 같은 함수를 가리킵니다.
// 이렇게 호출하면 자바스크립트는 이 함수가 어디에 속하는지 알 수 없으므로 this는 undefined에 묶입니다.
console.log(speak());   // "My name is undefined"
