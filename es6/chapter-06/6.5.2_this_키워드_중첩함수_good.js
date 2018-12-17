// o.greetBackwards()를 호출하는 시점에서 자바스크립트는 this를 의도한 대로 o에 연결하지만,
// greetBackwards안에서 getReverseName을 호출하면 this는 o가 아닌 다른 것에 묶입니다.
// 이런 문제를 해결하기 위해 널리 사용하는 방법은 [다른 변수에 this를 할당]하는 겁니다.

// this를 self나 that에 할당하는 코드를 많이 보게 될 겁니다.

// 이 장 후반에서 설명할 화살표 함수를 써도 이 문제를 해결할 수 있습니다.
const o = {
    name: "Julie",
    greetBackwards: function() {

        const self = this;  // this를 다른 변수에 할당

        function getReverseName() {
            let nameBackwards = '';
            for (let i = self.name.length-1; i >= 0; i--) {
                nameBackwards += self.name[i];          
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    },
};

console.log(o.greetBackwards());    // "eiluJ si eman ym ,olleH"