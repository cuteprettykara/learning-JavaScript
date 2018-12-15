if (new Date().getDay === 3) {
    totalBet = 1;
} else if (funds === 7) {
    totalBet = funds;
} else {
    console.log("No superstition here!");
}

// 예민한 독자라면 [0블록문과 블록 없는 문을 섞어 쓰지 말라는 규칙]을 어겼다고 지적할 수도 있습니다.
// 하지만 이건 [예외]입니다. 널리 쓰이는 패턴이고, 혼란을 초래하지도 않습니다.
// 물론 다음과 같이 블록문만 사용하게 고쳐 쓸 수 있지만, 코드가 더 명확해지기는 커녕 복잡해지기만 했습니다.
if (new Date().getDay === 3) {
    totalBet = 1
} else {
    if (funds === 7) {
        totalBet = funds;
    } else {
        console.log("No superstition here!");
    }
}