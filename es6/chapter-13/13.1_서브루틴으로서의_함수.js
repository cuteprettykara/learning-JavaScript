// 서브루틴(subroutine)은 반복되는 작업의 일부를 떼어내서 이름을 붙이고, 언제든 그 이름을 부르기만 하면 실행합니다.

// 서브루틴은 대개 어떤 알고리즘을 나타내는 형태입니다.

function printLeapYearStatus() {
    const year = new Date().getFullYear();
    if (year % 4 !== 0) console.log(`${year} is NOT a leap year.`)
    else if (year % 100 !== 0) console.log(`${year} is a leap year.`)
    else if (year % 400 !== 0) console.log(`${year} is NOT a leap year.`)
    else console.log(`${year} is a leap year.`);
}

printLeapYearStatus();