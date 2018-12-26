// countdown 함수를 수정해서 에러가 일어나게 만들어 봅시다.
// 13은 불길한 숫자이니 카운트다운을 하다가 13을 만나면 에러를 내는 겁니다.
function countdown(seconds) {
    return new Promise(function(resolve, reject) {
        for (let i = seconds; i>=0; i--) {
            setTimeout(function () {
                if (i===13) return reject(new Error("Oh my god"));
                if (i>0) 
                    console.log(i + '...');
                else 
                    resolve(console.log('GO!'));
            }, (seconds-i)*1000);
        }
    });
}

const p = countdown(20);

p.then(function() {
    console.log("countdown completed successfully");
});

p.catch(function(err) {
    console.log("countdown experienced an error: " + err.message);
});

// 숫자를 바꿔 가면서 몇 번 테스트해 보십시오. 흥미로운 일이 벌어질 겁니다.
// 물론 13보다 작은 숫자를 사용하면 에러 없이 카운트다운이 실행됩니다.

// 13이상의 숫자를 사용하면 13에서 에러가 일어납니다.
// 하지만 콘솔에는 12부터 다시 카운트를 기록합니다.
// reject나 resolve가 함수를 멈추지는 않습니다.
// 이들은 그저 프라미스의 상태를 관리할 뿐입니다.

// countdown 함수는 개선할 부분이 더 있습니다.
// * 일반적으로 함수가 성공이든 실패든 결정됐다면(settled) 멈춰야 하는데 
//   countdown 함수는 실패한 후에도 계속 진행합니다.
// * 앞에서 콘솔에 기록하는 부분이 별로 필요하지 않다는 얘기를 했었습니다. 
//   사실 필요한 것은 카운트다운을 컨트롤 할 수 있는 기능입니다.
// * 진행 상황을 알려주지 않습니다. => Q(https://github.com/kriskowal/q)