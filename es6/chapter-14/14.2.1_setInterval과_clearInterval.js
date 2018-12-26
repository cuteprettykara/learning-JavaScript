// 다음 예제는 분이 넘어가거나 10회째가 될 때까지 5초마다 콜백을 실행합니다.
const start = new Date();
let i = 0;
const intervalId = setInterval(function() {
    let now = new Date();
    if (now.getMinutes() != start.getMinutes() || ++i>10)
        return clearInterval(intervalId);
        
    console.log(`${i}: ${now}`);
}, 5*1000);

// setTimeout, setInterval, clearInterval은 모두 전역 객체에 정의되어 있습니다.
// [전역 객체]
// * 브라우저: window
// * 노드    : global