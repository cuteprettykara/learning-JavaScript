// 화살표 표기법(arrow notation)
// function이라는 단어와 중괄호를 줄이려고 고안된 단축 문법

// 화살표 함수에는 3가지 단축 문법이 있습니다.
// 1. function을 생략해도 됩니다.
// 2. 매개변수가 단 하나 뿐이라면, 괄호도 생략할 수 있습니다.
// 3. 함수 바디가 표현식 하나라면, 중괄호와 return문도 생략할 수 있습니다.

// 화살표 함수는 [항상] 익명입니다.

// 아래 표현식은 모두 동등한 한 쌍입니다.
const f1 = function() { return "hello!"; }
// 또는
// const f1 = () => "hello!";

const f2 = function(name) { return `Hello, ${name}!`; }
// 또는
// const f2 = name =>  `Hello, ${name}!`;


// 화살표 함수는 단순히 function 키워드와 괄호 등을 생략하는 단축 문법에 그치치 않으며,
// 최근 주목받고 있는 함수형 프로그래밍을 자바스크립트에 도입하는 중요한 열쇠이기도 합니다.

// 화살표 함수는 익명 함수를 만들어 다른 곳에 [전달]하려 할 때 가장 유용합니다.(8장)

// 화살표 함수에는 일반적인 함수와 중요한 차이가 있습니다.
// 1. this가 다른 변수와 마찬가지로, 정적으로(lexically) 묶인다는 겁니다.
//    => 화살표 함수를 사용하면 중첩 함수 안에서 this를 사용할 수 있습니다.
const o = {
    name: "Julie",
    greetBackwards: function() {
        const getReverseName = () => {
            console.dir(this);  // { name: 'Julie', greetBackwards: [Function: greetBackwards] }

            let nameBackwards = '';
            for (let i = this.name.length-1; i >= 0; i--) {
                nameBackwards += this.name[i];          
            }
            return nameBackwards;
        };

        return `${getReverseName()} si eman ym ,olleH`;
    },
};

const p = {
    name: "Delphy",
    greetBackwards: function() {
        const getReverseName = function() {
            console.dir(this);  // Object [global] { ... }
            this.name = "sangbum";

            let nameBackwards = '';
            for (let i = this.name.length-1; i >= 0; i--) {
                nameBackwards += this.name[i];          
            }
            return nameBackwards;
        };

        return `${getReverseName()} si eman ym ,olleH`;
    },
};


console.log(o.greetBackwards());    // "eiluJ si eman ym ,olleH"
console.log(p.greetBackwards());    // "eiluJ si eman ym ,olleH"

// 화살표 함수에는 일반적인 함수와 다른 점이 2가지 더 있습니다.
// 1. 객체 생성자로 사용할 수 없다.
// 2. arguments 변수도 사용할 수 없다. => 확산 연산자를 대신 사용하면 된다.