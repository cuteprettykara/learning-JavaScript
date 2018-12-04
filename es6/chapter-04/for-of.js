// m 이상 n 이하의 무작위 정수를 반환합니다.
function rand(m, n) {
    return m + Math.floor((n-m+1)*Math.random());
}

// 크라운 앤 앵커 게임의 여섯 그림 중 하나에 해당하는 문자열을 무작위로 반환합니다.
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}

// ES6에서 새로 생긴 반복문
// for..of 루프는 [컬렉션]의 [요소]에 루프를 실행
// 배열, iterable객체에 모두 사용할 수 있는 범용적인 루프
// 배열에 루프를 실행해야 하지만, 각 요소의 인덱스를 알 필요는 없을 때 알맞습니다.
const hand = [randFace(), randFace(), randFace()];
for (let face of hand) {
    console.log(`You rolled ... ${face}!`);
}