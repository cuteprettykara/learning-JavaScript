// 다른 스코프에 있으면서 이름이 같은 변수나 상수는 혼란을 초래할 때가 많습니다.
// 스코프 하나가 끝난 다음에 다른 스코프가 있는 식이라면 비교적 단순합니다.
{
    // block 1
    let x = 'blue';
    console.log(x);     // 'blue'
}
console.log(typeof x);  // "undefined"; x는 스코프 밖에 있습니다.
{
    // block 2
    let x = 3;
    console.log(x);     // "3"
}
console.log(typeof x);  // "undefined"; x는 스코프 밖에 있습니다.


// 앞의 예제의 x는 다른 스코프에 있는, 이름만 같은 두 개의 변수임을 이해하기 쉽습니다.
// 이제 스코프가 중첩되는 경우를 살펴봅시다.
// 이 예제는 변수 숨김(variable masking)을 잘 보여줍니다.
// 내부 블록의 x는 외부 스코프의 x를 숨기는 효과가 있습니다.

// 중요한 점은, 실행 흐름이 내부 블록에 들어가 새 변수 x를 정의하는 순간,
// [두 변수가 모두] [스코프 안]에 있다는 겁니다.
// 두 변수의 이름이 같으므로, 외부 스코프에 있는 변수에 [접근할 방법이 없습니다.]
{
    // 외부 블록
    let x = 'blue';
    console.log(x);     // 'blue'

    {
        // 내부 블록
        let x = 3;
        console.log(x);     // "3"
    }

    console.log(x);     // 'blue'
}

console.log(typeof x);     // "undefined"; x는 스코프에 있지 않습니다.