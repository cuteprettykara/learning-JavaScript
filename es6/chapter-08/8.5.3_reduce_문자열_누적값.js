// 문자열 누적값을 써서
// 6글자가 넘는 단어를 모아 문자열 하나로 만들어 봅시다.
const words = [
    "Beachball", "Rodeo", "Angel",
    "Aardvark", "Xylophone", "November", "Chocolate",
    "Papaya", "Uniform", "Joker", "Clover", "Bali"
];

// 방법1: reduce 사용
const longWords = words.reduce((a, w) => w.length > 6 ? a + " " + w : a, "").trim();
console.log(longWords);

// 방법2: filter와 join 사용