// [쉼표 연산자]를 쓰면 [초기화]와 [마지막 표현식]에 여러 문을 결합할 수 있습니다.
// 다음 for 루프는 피보나치 수열의 숫자 중 처음 8개를 출력합니다.
for(let temp, i=0, j=1; j<30; temp=i, i=j, j=i+temp)
    console.log(j);

// i=0, j=1
// 1.   temp=0, i=1, j=1
// 1.   temp=1, i=1, j=2
// 2.   temp=1, i=2, j=3
// 3.   temp=2, i=3, j=5
// 5.   temp=3, i=5, j=8
// 8    temp=5, i=8, j=13
// 13   temp=8, i=13,j=21
// 21   temp=13,i=21,j=34

console.log('**************************');

// for 루프에서 조건(condition)을 생략하면 항상 true로 평가되므로 무한루프가 만들어집니다.
for(;;) console.log("I will repeat forever");



// for루프는 보통 정수 인덱스를 늘이거나 줄이면서 반복하지만, 꼭 그래야 하는 것은 아닙니다.
// 어떤 표현식이든 쓸 수 있습니다.
let s = '3';
for(; s.length<10; s=' ' + s);  // 문자열의 길이를 condition으로 썼습니다.
                                // 마지막에 세미콜론이 없으면 에러가 일어납니다.

// 제어 변수가 정수가 아니어도 괜찮습니다.
for(let x=0.2; x<3.0; x += 0.2)
    console.log(x);

// 조건에 객체 프로퍼티를 썼습니다.
for(; !player.isBroke();)
    console.log("Still playing!");


// for 루프는 모두 while 루프로 고쳐 쓸 수 있습니다.
for([initialization]; [condition]; [final-expression])
    statement

// 위의 코드는 다음 코드와 똑같이 동작합니다.
[initialization]
while([condition]) {
    statement
    [final-expression]
}

// for 루프의 장점은 루프의 제어부가 첫 번째 행에 모여 있어서 일목요연하게 파악할 수 있다는 겁니다.
// 또한, for 루프에서는 let으로 초기화한 변수가 for 루프 안에서만 유효하다는 장점도 있습니다.
// 이런 for문을 while문으로 바꾸면, 컨트롤 변수는 루프 바깥에서도 볼 수 있게 됩니다.