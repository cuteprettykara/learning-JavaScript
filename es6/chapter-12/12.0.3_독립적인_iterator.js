// 이터레이터는 모두 독립적입니다.
// 즉, 새 이터레이터를 만들 때마다 처음에서 시작합니다.
// 그리고 각각 다른 요소를 가리키는 이터레이터 여러 개를 동시에 사용할 수도 있습니다.
const book = [
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
    "Up above the world you fly,",
    "Like a tea tray in the sky.",
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!"
];

const it1 = book.values();
const it2 = book.values();
// 어느 이터레이터도 아직 시작하지 않았습니다.

// it1으로 두 페이지를 읽습니다.
console.log(it1.next()); // { value: 'Twinkle, twinkle, little bat!', done: false }
console.log(it1.next()); // { value: 'How I wonder what you\'re at!', done: false }

// it2으로 한 페이지를 읽습니다.
console.log(it2.next()); // { value: 'Twinkle, twinkle, little bat!', done: false }

// it1으로 한 페이지를 더 읽습니다.
console.log(it1.next()); // { value: 'Up above the world you fly,', done: false }

// 이 예제는 두 이터레이터가 서로 독립적이며, 같은 배열에서 따로따로 움직일 수 있음을 보여줍니다.