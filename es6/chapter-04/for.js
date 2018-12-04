// for 루프에서 조건을 생략하면 항상  true로 평가되므로 무한루프가 만들어집니다.
// for(;;) console.log("I will repeat forever");

// for루프는 보통 정수 인덱스를 늘이거나 줄이면서 반복하지만, 꼭 그래야 하는 것은 아닙니다.
let s = '3';
for(; s.length<10; s=' ' + s);  // 마지막에 세미콜론이 없으면 에러가 일어납니다.

// 제어 변수가 정수가 아니어도 괜찮습니다.
for(let x=0.2; x<3.0; x += 0.2)
    console.log(x);