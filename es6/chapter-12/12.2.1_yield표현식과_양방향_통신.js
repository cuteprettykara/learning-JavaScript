// 제너레이터와 호출자 사이에서 양방향 통신이 가능하다는 것은 이미 언급했습니다.
// 통신은 yield 표현식을 통해 이뤄집니다.
// 표현식은 값으로 평가되고, yield는 표현식이므로 반드시 어떤 [값으로 평가]됩니다.
// yield 표현식의 값은 호출자가 제너레이터의 이터레이터에서 [next를 호출할 때 제공하는 매개변수]입니다.
// 대화를 이어가는 제너레이터를 만들어 봅시다.
function* interrogate() {
    const name = yield "What is your name?";
    const color = yield "What is your favorite color?";
    return `${name}'s favorite color is ${color}.`;
}

// 이 제너레이터를 호출하면 이터레이터를 얻습니다.
// 그리고 이터레이터의 어떤 부분도 아직 실행하지 않은 상태입니다.
// next를 호출하면 제너레이터는 첫 번째 행을 실행하려 합니다.
// 하지만 그 행에는 [yield 표현식이 들어 있으므로], 제너레이터는 [반드시] 제어권을 호출자에게 넘겨야 합니다.
// 제너레이터의 첫 번째 행이 완료(resolve)되려면, 호출자가 next를 다시 호출해야 합니다.
// 그러면 name은 next에서 전달하는 값(매개변수)을 받습니다.

const it = interrogate();
console.log(it.next());         // { value: 'What is your name?', done: false }
console.log(it.next('Ethan'));  // { value: 'What is your favorite color?', done: false }
console.log(it.next('orange')); // { value: 'Ethan\'s favorite color is orange.', done: true }

// 호출자가 제너레이터에 정보를 전달하므로, 제너레이터는 그 정보에 따라 자신의 동작 방식 자체를 바꿀 수 있습니다.

// 제너레이터는 화살표 표기법으로 만들 수 없으며, 반드시 function*을 써야 합니다.