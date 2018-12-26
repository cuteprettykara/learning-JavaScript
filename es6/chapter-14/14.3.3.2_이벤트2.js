// 하지만 여전히 할 일이 남았습니다.
// Countdown 인스턴스가 13에 도달했을 때 프라미스를 파기했는데도 카운트다운이 계속 진행되는 문제입니다.
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

const c = new Countdown(15, true)
    .on('tick', function(i) {       // 체인으로 연결해도 됩니다.
        if (i>0) console.log(i + '...');
    });

c.go()
    .then(function() {
        console.log('GO!')
    })
    .catch(function(err) {
        console.error(err.message);  
    });

// 여전히 모든 카운트가 출력되며 0이 될 때까지 진행합니다.
// 이 문제를 해결하기기 조금 어려운 건 타임아웃이 이미 모두 만들어졌기 때문입니다.