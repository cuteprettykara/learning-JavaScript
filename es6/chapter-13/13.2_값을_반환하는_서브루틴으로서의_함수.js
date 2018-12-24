// printLeapYearStatus 함수는 잘 동작하지만, 프로그램이 커지면 콘솔에 기록하는것은 곧 쓸모없어집니다.
// 이제 HTML에 결과를 출력하거나, 파일에 저장하거나, 다른 계산에 사용해야할 수도 있는데,
// 지금 가진 서브루틴은 그렇게 활용할 수 없습니다.

// 다행히 함수가 값을 반환하는 서브루틴이 되도록 고쳐 쓰기는 쉽습니다.
function isCurrentYearLeapYear() {
    const year = new Date().getFullYear();
    if (year % 4 !== 0) return false;
    else if (year % 100 !== 0) return true;
    else if (year % 400 !== 0) return false;
    else return true;
}

// 이제 새로 만든 함수의 반환값을 활용하는 예제를 생각해 봅시다.
const daysInMonth = [
    31, isCurrentYearLeapYear() ? 29 : 28,
    31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];

if (isCurrentYearLeapYear()) console.log('It is a leap year.');

// 더 진행하기 전에 이 함수의 이름에 대해 생각해 봅시다.
// 불리언을 반환하거나, 불리언이 필요한 컨텍스트에서 사용하도록 만든 함수는
// is로 시작하는 이름을 붙이는 게 일반적입니다.

// 함수 이름에는 current도 들어있습니다. 이건 왜일까요?
// 이 함수는 항상 현재 날짜를 기준으로 하기 때문입니다.
// 달리 말해, 이 함수는 2016년 12월 31에 호출했을 때와, 
// 다음 날인 2017년 1월 1일에 호출했을 때 결과가 다릅니다.