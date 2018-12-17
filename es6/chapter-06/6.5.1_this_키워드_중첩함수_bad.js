// 중첩된 함수 안에서 this를 사용하려다 보면 혼란스러울 때가 많습니다.
// 이 예제에서는 메소드 안에 보조 함수가 있습니다.
// o.greetBackwards()를 호출하는 시점에서 자바스크립트는 this를 의도한 대로 o에 연결하지만,
// greetBackwards안에서 getReverseName을 호출하면 this는 o가 아닌 다른 것에 묶입니다.
const o = {
    name: "Julie",
    greetBackwards: function() {
        function getReverseName() {
            console.log(`in getReverseName(): this === o : ${this === o}`);     // false
            let nameBackwards = '';
            for (let i = this.name.length-1; i >= 0; i--) {
                nameBackwards += this.name[i];          
            }
            return nameBackwards;
        }
        console.log(`in greetBackwars(): this === o : ${this === o}`);          // true
        return `${getReverseName()} si eman ym ,olleH`;
    },
};

console.log(o.greetBackwards());    //  Cannot read property 'length' of undefined

// o.greetBackwards()를 호출하는 시점에서 자바스크립트는 this를 의도한 대로 o에 연결하지만,
// greetBackwards 안에서 getReverseName을 호출하면, this는 o가 아닌 다른 것에 묶입니다.
// 이런 문제를 해결하기 위해 널리 사용하는 방법은 [다른 변수에 this를 할당]하는 겁니다.