// 이전 예제에서는 자바스크립트가 일으킨 에러를 캐치했습니다.
// 자바스크립트가 에러를 일으키기만 기다릴 필요 없이 직접 에러를 일으켜서(throw) 예외 처리 작업을 시작할 수도 있습니다.

// 예외 처리 기능이 있는 다른 언어와는 달리, 자바스크립트는 에러를 일으킬 때 꼭 객체만이 아니라,
// 숫자, 문자열 등 [어떤 값이든] catch 절에 넘길 수 있습니다.
// 하지만 Error 인스턴스를 넘기는 것이 가장 편리합니다.
// 대부분의 catch 블록은 Error 인스턴스를 받을 것이라고 간주하고 만듭니다.
// 당신이 만든 함수를 동료가 사용한다면, 그 동료는 Error 인스턴스를 받을 것으로 생각할 겁니다.

// 은행 애플리케이션에서 사용할 예금 인출 기능을 만든다고 생각해 봅시다.
// 계좌의 잔고(balance)가 요청받은 금액(amount)보다 적다면 예외를 일으켜야 할 겁니다.
// (현금 인출 단계에 들어가기 전에 잔고를 먼저 체크하는 게 당연하므로, 잔고가 부족한 건 예외적인 상황입니다.)
function billPay(amount, payee, account) {
    if (amount > account.balance)
        throw new Error("insufficient funds");
    account.transfer(payee, amount);
}

// throw를 호출하면 현재 함수는 즉시 실행을 멈춥니다.
// 따라서 위 예제에서는 account.transfer가 호출되지 않으므로 잔고가 부족한데도 현금을 찾아가는 사고는 발생하지 않습니다.