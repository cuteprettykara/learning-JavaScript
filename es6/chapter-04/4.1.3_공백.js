// 대부분의 경우 자바스크립트는 줄바꿈 문자를 포함해, 추가 공백을 신경 쓰지 않습니다.
while (funds > 1 && funds < 100)

    funds = funds + 2;

// 하지만 이런 코드는 두 문 사이에 어떤 연관이 있다는 느낌을 주지 않습니다.
// 이런 코드는 오해의 소지가 있으므로 피해야 합니다.




// 다음 코드도 같은 일을 하는데, 모호해 보이지 않습니다.
while (funds > 1 && funds < 100) funds = funds + 2;
while (funds > 1 && funds < 100) { funds = funds + 2; }