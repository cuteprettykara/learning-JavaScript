// ES6에서 새로 생긴 반복문
// for..of 루프는 [컬렉션]의 [요소]에 루프를 실행

// for(variable of object)
//     statement


// 배열, iterable객체에 모두 사용할 수 있는 범용적인 루프입니다.

function rand(m, n) {
    return m + Math.floor((n-m+1)*Math.random());
}
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}

const hand = [randFace(), randFace(), randFace()];
for (let face of hand) {
    console.log(`You rolled ... ${face}!`);
}


// for..of는 배열에 루프를 실행해야 하지만, 각 요소의 [인덱스를 알 필요는 없을 때] 알맞습니다.
// 인덱스를 알아야 한다면 일반적인 for 루프를 사용하십시오.
for (let i = 0; i < hand.length; i++) {
    console.log(`Roll ${i+1}: ${hand[i]}`);
}