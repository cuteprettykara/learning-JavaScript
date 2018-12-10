// map과 filter를 결합하면 정말 다양한 일을 할 수 있습니다.
// 예를 들어 앞에서 만든 카드 덱을 짧은 문자열로 표현하고 싶다고 합시다.
// 카드 그림(하트, 클로버, 다이아몬드, 스페이드)에는 유니코드 코드 포인트를 쓰고,
// 에이스, 킹, 퀸, 주니어는 숫자 대신 각각 A, K, Q, J를 쓰겠습니다.
// 여기에 필요한 함수는 조금 길어지므로 익명 함수를 쓰지 않고 따로 만들겠습니다.

// 카드 덱을 만듭니다.
const cards = [];
for (let suit of ['H', 'C', 'D', 'S']) {
    for (let value = 0; value <= 13; value++) {
        cards.push({suit, value});
    }
}

function cardToString(c) {
    const suits = {'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660'};
    const values = {1: 'A', 11: 'J', 12: 'Q', 13: 'K'};

    for (let i = 2; i <= 10; i++) {
        values[i] = i;
    }

    return values[c.value] + suits[c.suit];
}

// value가 2인 카드
const x = cards.filter(c => c.value === 2)
    .map(cardToString);
console.log(x);     // [ '2♥', '2♣', '2♦', '2♠' ]

const y = cards.filter(c => c.suit === 'H' && c.value > 10)
    .map(cardToString);
console.log(y);     // [ 'J♥', 'Q♥', 'K♥' ]

