// 다음과 같이 프라미스에 타임아웃을 거는 함수를 만들 수 있습니다.
function addTimeout(fn, timeout) {
    if (timeout === undefined) timeout = 1000;  // 타임아웃 기본값
    return function(...args) {
        return new Promise(function(resolve, reject) {
            const tid = setTimeout(reject, timeout, new Error("promise timed out"));
            fn(...args)
                .then(function(...args) {
                    clearTimeout(tid);
                    resolve(...args);
                })
                .catch(function(err) {
                    clearTimeout(tid);
                    reject(...args);
                });
        });
    }
}

// "와~ 프라미스를 반환하는 함수를 호출하는 프라미스를 반환하는 함수를 반환하는 함수?? 뭐가 이리 복잡해!"
// 하고 외치더라도 충분히 이해할 수 있습니다.
// 프라미스에 타임아웃을 걸기 위해서는 함수를 반환하는 함수가 필요한데, 절대 쉬운 문제는 아닙니다.
// 이 함수를 완벽히 이해하는 건 상당한 고급 사용자에게나 가능한 일이니 당장 이해하지 못해도 괜찮습니다.
// 하지만 이 함수를 사용하는 건 아주 쉽습니다.
// 프라미스를 반환하는 어떤 함수에든 타임아웃을 걸 수 있습니다.
// 로켓과학이 엄청 발달해서, 가장 느린 로켓도 10초 안에는 궤도에 들어갈 수 있다고 합시다.
// 그러면 타임아웃은 11초면 충분합니다.
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
    .then(addTimeout(launch, 11*1000))
    .then(function(msg) {
        console.log(msg);
    })
    .catch(function(err) {
        console.error(err.message);
        console.error("Houston, we have a problem...");  
    });

// 이제 launch 함수에 문제가 있더라도 프라미스 체인은 항상 결정됩니다.