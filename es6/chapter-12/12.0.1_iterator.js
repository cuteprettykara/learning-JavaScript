// ES6에서는 매우 중요한 새로운 개념 이터레이터(iterator)와 제너레이터(generator)를 도입했습니다.
// 제너레이터는 이터레이터에 의존하는 개념이니 이터레이터부터 시작합시다.

// 이터레이터는 '지금 어디 있는지' 파악할 수 있도록 돕는다는 면에서 일종의 '책갈피'와 비슷한 개념입니다.
// 배열은 이터러블(iterable)객체의 좋은 예입니다.

// 책에 여러 페이지가 있는 것처럼, 배열에는 여러 요소가 들어 있으므로,
// 책에 책갈피를 끼울 수 있듯, 배열에는 이터레이터를 사용할 수 있습니다.

// book이란 배열이 있고, 이 배열의 각 요소는 [책의 한 페이지를 나타내는 문자열]이라고 합시다.
// 한 페이지에 문장 하나씩만 들어 있는 어린이용 동화책을 상상해 보십시오.
const book = [
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
    "Up above the world you fly,",
    "Like a tea tray in the sky.",
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!"
];

// 이제 book 배열에 values 메소드를 써서 이터레이터를 만들 수 있습니다.
const it = book.values();

// 이터레이터는 책갈피지만, 이 책에만 사용할 수 있습니다.
// 그리고 아직은 책갈피를 꽂을 수 없습니다. 읽지 않았으니까요.
// '읽기 시작'하려면 이터레이터의 next 메소드를 호출합니다.
// 이 메소드가 반환하는 객체에는 
// * value 프로퍼티(지금 보이는 페이지)와
// * done 프로퍼티(마지막 메이지를 읽으면 true로 바뀌는)가 있습니다.

console.log(it.next()); // { value: 'Twinkle, twinkle, little bat!', done: false }
console.log(it.next()); // { value: 'How I wonder what you\'re at!', done: false }
console.log(it.next()); // { value: 'Up above the world you fly,',   done: false }
console.log(it.next()); // { value: 'Like a tea tray in the sky.',   done: false }
console.log(it.next()); // { value: 'Twinkle, twinkle, little bat!', done: false }
console.log(it.next()); // { value: 'How I wonder what you\'re at!', done: false }
console.log(it.next()); // { value: undefined, done: true }
console.log(it.next()); // { value: undefined, done: true }
console.log(it.next()); // { value: undefined, done: true }

// 여기서 중요한 점이 몇 개 있습니다.
// 첫째, next에서 책의 마지막 페이지를 반환했다 해서 끝난 것은 아니란 겁니다.
// 책의 비유로는 좀 맞지 않는 부분입니다.
// 책의 마지막 페이지를 읽었다면 다 읽은 거지만,
// 이터레이터는 훨씬 다양한 상황에 쓰일 수 있고, 끝나는 시점을 간단히 결정할 수는 없습니다.
// 더 진행할 것이 없으면 value 는 undefined가 되지만, next는 [계속 호출할 수 있습니다].

// 일단 이터레이터가 끝까지 진행하면 뒤로 돌아가서 다른 데이터를 제공할 수는 없습니다.
// (곧 보겠지만, 객체마다 이터레이션 메커니즘을 따로 정할 수 있으므로 사실 역행하는 이터레이터를
//  만드는 것도 가능하긴 합니다. 특별한 경우가 아니라면 역행하는 이터레이터는 권장하지 않습니다.)

// 이 예제에서 묘사하지는 않았지만, it.next()를 호출하는 중간에 다른 일을 할 수 있습니다.