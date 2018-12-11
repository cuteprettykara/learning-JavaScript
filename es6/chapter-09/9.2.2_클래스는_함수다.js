// ES6에서 class 키워드를 도입하기 전까지, 
// 클래스를 만든다는 것은 곧, 클래스 [생성자로 사용할] [함수]를 만든다는 의미였습니다.
// class  문법이 훨씬 더 직관적이고 단순하긴 하지만, 
// 사실 class는 단축문법일 뿐이며, 자바스크립트의 클래스 자체가 바뀐 것은 아닙니다.
// 따라서 자바스크립트의 클래스 자체를 이해하는 것이 중요합니다.

// 클래스는 사실 [함수]일 뿐입니다.
// ES5에서는 Car 클래스를 다음과 같이 만들었을 겁니다.
function Car() {
    this.make = make;
    this.model = model;
    this._useGears = ['P', 'N', 'R', 'D'];
    this._useGear = this._useGears[0];
}

// ES6에서도 똑같이 할 수 있습니다. 결과는 완전 동일합니다.
// 다음 예제를 보십시오.
class ES6Car {} // 생성자는 의도적으로 생략합니다.
function ES5Car() {}


console.log(typeof ES5Car); // function
console.log(typeof ES6Car); // function

// ES6에서 클래스가 바뀐 것은 아닙니다. 단지 간편한 새 문법이 생겼을 뿐입니다.