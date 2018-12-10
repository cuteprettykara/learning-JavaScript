// filter는 이름이 암시하듯, 배열에서 필요한 것들만 남길 목적으로 만들어졌습니다.
// filter는 map과 마찬가지로 사본을 반환하며, 새 배열에는 필요한 요소만 남습니다.
// 어떤 요소를 남길지는 마음대로입니다.

// 카드 덱을 만듭니다.
const cards = [];
for (let suit of ['H', 'C', 'D', 'S']) {
    for (let value = 0; value <= 13; value++) {
        cards.push({suit, value});
    }
}

// value가 2인 카드
console.log(cards.filter(c => c.value === 2));
// [ { suit: 'H', value: 2 },
//   { suit: 'C', value: 2 },
//   { suit: 'D', value: 2 },
//   { suit: 'S', value: 2 } ]

// 다이아몬드
console.log(cards.filter(c => c.suit === 'D'));
// [ { suit: 'D', value: 0 },
//   { suit: 'D', value: 1 },
//   { suit: 'D', value: 2 },
//   { suit: 'D', value: 3 },
//   { suit: 'D', value: 4 },
//   { suit: 'D', value: 5 },
//   { suit: 'D', value: 6 },
//   { suit: 'D', value: 7 },
//   { suit: 'D', value: 8 },
//   { suit: 'D', value: 9 },
//   { suit: 'D', value: 10 },
//   { suit: 'D', value: 11 },
//   { suit: 'D', value: 12 },
//   { suit: 'D', value: 13 } ]

// 킹, 퀸, 주니어
console.log(cards.filter(c => c.value > 10));
// [ { suit: 'H', value: 11 },
//   { suit: 'H', value: 12 },
//   { suit: 'H', value: 13 },
//   { suit: 'C', value: 11 },
//   { suit: 'C', value: 12 },
//   { suit: 'C', value: 13 },
//   { suit: 'D', value: 11 },
//   { suit: 'D', value: 12 },
//   { suit: 'D', value: 13 },
//   { suit: 'S', value: 11 },
//   { suit: 'S', value: 12 },
//   { suit: 'S', value: 13 } ]

// 하트의 킹, 퀀, 주니어
console.log(cards.filter(c => c.suit === 'H' && c.value > 10));
// [ { suit: 'H', value: 11 },
//   { suit: 'H', value: 12 },
//   { suit: 'H', value: 13 } ]
