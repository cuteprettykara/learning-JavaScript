// 프라미스는 비동기적 코드를 단순화하고 콜백이 두 번 이상 실행되는 문제를 방지합니다.
// 하지만 resolve나 reject를 호출하는 걸 잊어서 프라미스가 결정되지 않는 문제까지 
// 자동으로 해결하지는 못합니다. 에러가 일어나지 않으므로 이런 실수는 찾기 매우 어렵습니다.
// 복잡한 시스템에서 결정되지 않은 프라미스는 그냥 잊혀질 수 있습니다.

// 결정되지 않은 프라미스를 방지하는 한 가지 방법은 프라미스에 타임아웃을 거는 겁니다.
// 충분한 시간이 지났는데도 프라미스가 결정되지 않으면 자동으로 실패하게 만들 수 있습니다.
// 물론 얼마나 기다려야 '충분히' 기다렸는지는 스스로 판단해야 합니다.
// 10분 정도는 걸리는 복잡한 알고리즘에 1초 타임아웃을 걸어서는 안됩니다.

// launch 함수에 에러 조건을 넣어봅시다.
// 발사하는 로켓은 열 번에 다섯 번은 실패하는 매우 실험적인 로켓입니다.
function launch() {
    return new Promise(function(resolve, reject) {
        if (Math.random() < 0.5) return;    // 문제가...
        console.log("Lift off!");
        setTimeout(function() {
            resolve("In orbit!");
        }, 2*1000);     // 2초만에 궤도에 도달하다니!
    });
}

const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
    constructor(seconds, superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }

    go() {
        const countdown = this;
        const timeoutIds = [];
        return new Promise(function(resolve, reject) {
            for (let i = countdown.seconds; i>=0; i--) {
                timeoutIds.push(setTimeout(function () {
                    if (countdown.superstitious && i===13) {
                        // 대기중인 타임아웃을 모두 취소합니다.
                        timeoutIds.forEach(clearTimeout);
                        return reject(new Error("Oh my god"));
                    }

                    countdown.emit('tick', i);
                        
                    if (i===0) resolve();
                }, (countdown.seconds-i)*1000));
            }
        });
    }
}

const c = new Countdown(5)
    .on('tick', i => console.log(i + '...'));

c.go()
    .then(launch)
    .then(function(msg) {
        console.log(msg);
    })
    .catch(function(err) {
        console.error(err.message);
        console.error("Houston, we have a problem...");  
    });

// 이 코드는 정말 무책임합니다.
// reject를 호출하지 않는데다가, 심지어 콘솔에 기록하지도 않습니다.
