// 영단어로 이루어진 배열이 있고, 각 단어를 첫 글자에 따라 묶는다고 하면
const words = [
    "Beachball", "Rodeo", "Angel",
    "Aardvark", "Xylophone", "November", "Chocolate",
    "Papaya", "Uniform", "Joker", "Clover", "Bali"
];

const alphabetical = words.reduce((a, x) => {
    // version 1
    if (!a[x[0]]) a[x[0]] = [];
    a[x[0]].push(x);

    // version 2
    // if (!a[x.charAt(0)]) a[x.charAt(0)] = [];
    // a[x.charAt(0)].push(x);
    
    return a;
}, {});

console.log(alphabetical);
/* 
{ B: [ 'Beachball', 'Bali' ],
  R: [ 'Rodeo' ],
  A: [ 'Angel', 'Aardvark' ],
  X: [ 'Xylophone' ],
  N: [ 'November' ],
  C: [ 'Chocolate', 'Clover' ],
  P: [ 'Papaya' ],
  U: [ 'Uniform' ],
  J: [ 'Joker' ] }
*/