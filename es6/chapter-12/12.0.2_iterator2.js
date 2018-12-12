// 배열의 요소를 나열하는 것이 목적이라면 for 루프나 for...of 루프를 쓸 수 있습니다.
// for 루프의 원리는 간단합니다.
// 배열 요소의 인덱스는 숫자형이고 순차적이므로, 인덱스 변수를 써서 해당하는 배열 요소에 접근할 수 있습니다.
// 하지만 for...of 루프는 어떻게 된 걸까요? 인덱스 없이 어떻게 루프를 실행할 수 있었을까요?
// 답은 이터레이터입니다. 이터레이터만 제공할 수 있다면 무엇이든 for...of 루프와 함께 쓸 수 있습니다.
// 먼저 이터레이터와 while 루프를 사용해서 for...of 루프를 흉내 내 봅시다.
const book = [
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
    "Up above the world you fly,",
    "Like a tea tray in the sky.",
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!"
];

const it = book.values();
let current = it.next();
while (!current.done) {
    console.log(current.value);
    current = it.next();
}