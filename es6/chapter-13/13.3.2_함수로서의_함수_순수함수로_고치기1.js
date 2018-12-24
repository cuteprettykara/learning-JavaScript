// 잠시 윤년 문제로 돌아가서, 이 함수를 순수 함수로 고치려면 어떻게 해야 할까요? 쉽습니다.
function isLeapYear(year) {
    if (year % 4 !== 0) return false;
    else if (year % 100 !== 0) return true;
    else if (year % 400 !== 0) return false;
    else return true;
}

// getNextRainbowColor 함수를 순수 함수로 고치는 건 손이 조금 더 갑니다.
// 먼저 외부변수를 클로저로 감싸는 방법을 봅시다.
const getNextRainbowColor = (function() {
    const colors = [
        'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
    ];
    
    let colorIndex = -1;
    
    return function() {
        if (++colorIndex >= colors.length) colorIndex = 0;
        return colors[colorIndex];
    }
})();

console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log('*********************');
console.log(getNextRainbowColor());

// 이제 부수 효과가 없어졌지만,
// 아직은 입력이 같아도 결과가 다를 수 있으므로 순수함수라고 볼 수는 없습니다.
