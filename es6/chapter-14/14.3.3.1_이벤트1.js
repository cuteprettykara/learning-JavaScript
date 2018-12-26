// 이벤트 발생을 알려주는 개체(emitter)
// 노드에는 이미 이벤트를 지원하는 모듈 EvetEmitter가 내장되어 있습니다.
// EvetEmitter를 써서 countdown 함수를 개선해 봅시다.
// EvetEmitter는 countdown 같은 함수와 함께 사용해도 되지만,
// 원래는 클래스와 함께 사용하도록 설계됐습니다.
// 그러니 먼저 countdown 함수를 Countdown 클래스로 바꿔 봅시다.
const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
    constructor(seconds, superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }

    go() {
        const countdown = this;
        return new Promise(function(resolve, reject) {
            for (let i = countdown.seconds; i>=0; i--) {
                setTimeout(function () {
                    if (countdown.superstitious && i===13) 
                        return reject(new Error("Oh my god"));

                    countdown.emit('tick', i);
                        
                    if (i===0) resolve();
                }, (countdown.seconds-i)*1000);
            }
        });
    }
}

// EvetEmitter를 상속하는 클래스는 이벤트를 발생시킬 수 있습니다.
// 실제로 카운트다운을 시작하고 프라미스를 반환하는 부분은 go 메소드입니다.
// go 메소드 안에서 가장 먼저 한 일은 countdown에 this를 할당한 겁니다.

// 카운트다운이 얼마나 남았는지 알기 위해서는 this 값을 알아야 하고,
// 13인지 아닌지 역시 콜백 안에서 알아야 합니다.

// this는 특별한 변수이고, 콜백 안에서는 값이 달라집니다.
// 따라서 this의 현재 값을 다른 변수에 저장해야 프라미스 안에서 쓸 수 있습니다.

// 가장 중요한 부분은 countdown.emit('tick', i) 입니다.
// 이 부분에서 tick 이벤트를 발생시키고, 필요하다면 프로그램의 다른 부분에서 이 이벤트를 주시할 수 있습니다.
// (이벤트 이름은 원하는 대로 정해도 됩니다)
// 개선한 카운트다운은 다음과 같이 사용할 수 있습니다.
const c = new Countdown(5);

c.on('tick', function(i) {
    if (i>0) console.log(i + '...');
});

c.go()
    .then(function() {
        console.log('GO!')
    })
    .catch(function(err) {
        console.error(err.message);  
    });

// 카운트다운이 끝나면 GO!를 출력합니다.
// 물론 GO!를 tick 이벤트 리스너 안에서 출력할 수도 있지만, 
// 이렇게 하는 편이 이벤트와 프라미스의 차이를 더 잘 드러낸다고 생각합니다.

// 처음 만들었던 countdown 함수보다 훨씬 복잡한 것은 사실이지만, 그만큼 기능이 늘어났습니다.
// 이제 카운트다운을 어떻게 활용할지 마음대로 바꿀 수 있고,
// 카운트다운이 끝났을 때 완료되는 프라미스도 생겼습니다.