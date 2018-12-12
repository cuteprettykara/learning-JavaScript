// 지금까지 살펴본 예제는 책의 페이지나 타임스탬프가 붙은 로그처럼, [숫자가 정해진] 요소들을 순회했습니다.
// 하지만 이터레이터는 무한한 데이터에도 사용할 수 있습니다.
// 피보나치 수열을 만들어 봅시다.
// 1,1,2,3,5,8,13,21,34,55,89,144,...

// 이 예제와 이전 예제의 차이는 이 예제의 이터레이터가 done에서 절대 true를 반환하지 않는다는 것뿐입니다.
// 무한루프에 빠지지 않도록, 10회 계산한 뒤 break문으로 빠져나옵시다.
class FibonacciSequence {
    [Symbol.iterator]() {
        let a = 0, b = 1;
        return {
            next() {
                let rval = { value: b, done: false };
                b += a;
                a = rval.value;

                return rval;
            }
        };
    }
}

// 풀이
// 0: return { 1, false }. b=1, a=1
// 1: return { 1, false }. b=2, a=1
// 2: return { 2, false }. b=3, a=2
// 3: return { 3, false }. b=5, a=3
// 4: return { 5, false }. b=8, a=5
// 5: return { 8, false }. b=13, a=8
// 6: return { 13, false }. b=21, a=13

// [1,1,2,3,5,8,13]


const fib = new FibonacciSequence();
let i = 0;
for (const n of fib) {
    console.log(n);
    if (++i > 9) break;
}