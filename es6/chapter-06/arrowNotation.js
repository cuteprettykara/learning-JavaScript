// 화살표 함수에는 일반적인 함수와 중요한 차이가 있습니다.
// this가 다른 변수와 마찬가지로, 정적으로(lexically) 묶인다는 겁니다.
// 화살표 함수를 사용하면 중첩 함수 안에서 this를 사용할 수 있습니다.
const o = {
    name: "Julie",
    greetBackwards: function() {
        const getReverseName = () => {
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

// 화살표 함수에는 일반적인 함수와 다른 점이 2가지 더 있습니다.
// 1. 객체 생성자로 사용할 수 없다.
// 2. arguments 변수도 사용할 수 없다. => 확산 연산자를 대신 사용하면 된다.