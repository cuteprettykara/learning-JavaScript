// 프라미스에는 체인으로 연결할 수 있다는 장점이 있습니다.
// 즉, 프라미스가 완료되면 다른 프라미스를 반환하는 함수를 즉시 호출할 수 있습니다.
// launch 함수를 만들어 카운트다운이 끝나면 실행되게 해 봅시다.
function launch() {
    return new Promise(function(resolve, reject) {
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

// 이 함수를 카운트다운에 쉽게 묶을 수 있습니다.

const c = new Countdown(15, true)
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

// 프라미스 체인을 사용하면 모든 단계에서 에러를 캐치할 필요는 없습니다.
// 체인 어디에서든 에러가 생기면 체인 전체가 멈추고 catch 핸들러가 동작합니다.