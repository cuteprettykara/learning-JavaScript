// 프로그래머들은 함수의 수학적인 정의에 충실한 함수를 순수 함수(pure function)라고 부릅니다.

// 순수함수는 입력이 같으면 결과도 반드시 같습니다.
// isCurrentYearLeapYear는 언제 호출하느냐에 따라서 true를 반환하기도 하고, false를 반환하기도 하므로
// 순수함수라고 할 수 없습니다.

// 순수함수는 부수 효과(side effect)가 없어야 합니다.
// 함수를 호출한다고 해서 프로그램의 상태가 바뀌어서는 안 된다는 뜻입니다.
// 지금까지 살펴본 함수에는 부수 효과가 없었습니다. 콘솔에 기록하는 것은 결과라고 봐야 하니까요.
// 간단한 예를 하나 봅시다.

const colors = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
];

let colorIndex = -1;

function getNextRainbowColor() {
    if (++colorIndex >= colors.length) colorIndex = 0;
    return colors[colorIndex];
}

console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log('*********************');
console.log(getNextRainbowColor());

// 이 함수는 순수 함수의 두 가지 정의를 모두 어깁니다.
// 1. 입력이 같아도(매개변수가 없다는 점이 같습니다) 결과가 항상 다르고,
// 2. 변수 colorIndex를 바꾸는 부수 효과가 있습니다.
//    colorIndex 변수는 getNextRainbowColor 함수에 속하지 않는데도 함수를 호출하면 값이 바뀝니다.
//    이것은 부수 효과입니다.