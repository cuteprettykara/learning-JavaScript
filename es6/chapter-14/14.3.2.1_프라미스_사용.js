// countdown 함수를 어떻게 사용하는지 알아봅시다.
// 프라미스는 무시해버리고 countdown(5)처럼 호출해도 됩니다.
// 카운트다운은 여전히 동작하고, 무슨 말인지 알기 어려운 프라미스는 신경쓰지 않아도 됩니다.
// 하지만  프라미스의 장점을 이용하고 싶다면 어떻게 해야 할까요?
// 반환된 프라미스를 사용하는 예제를 살펴봅시다.
function countdown(seconds) {
    return new Promise(function(resolve, reject) {
        for (let i = seconds; i>=0; i--) {
            setTimeout(function () {
                if (i>0) 
                    console.log(i + '...');
                else 
                    resolve(console.log('GO!'));
            }, (seconds-i)*1000);
        }
    });
}

countdown(5).then(
    function() {
        console.log("countdown completed successfully");
    },
    function(err) {
        console.log("countdown experienced an error: " + err.message);
    }
);

// 이 예제에서는 반환된 프라미스를 변수에 할당하지 않고 then 핸들러를 바로 호출했습니다.
// then 핸들러는 성공 콜백과 에러 콜백을 받습니다. 
// 경우의 수는 단 두 가지뿐입니다. 성공 콜백이 실행되거나, 에러 콜백이 실행되거나 입니다.