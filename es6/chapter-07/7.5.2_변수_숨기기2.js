{
    // 외부 블록
    let x = {color: 'blue'};
    let y = x;
    let z = 3;

    {
        // 내부 블록
        let x = 5;              // 이제 바깥의 x는 가려졌습니다.
        console.log(x);         // 5
        console.log(y.color);   // "blue"; y가 가리키는(외부 스코프의 x가 가리키는) 객체는 스코프 안에 있습니다.
        y.color = "red";
        console.log(z);         // 3; z는 숨겨지지 않았습니다.
    }

    console.log(x.color);       // 'red'; 객체는 내부 스코프에서 수정됐습니다.
    console.log(y.color);       // 'red'; x와 y는 같은 객체를 가리킵니다.
    console.log(z);             // 3
}

// 이제 스코프가 계층적임을 이해했을 겁니다.
// 이전 스코프를 떠나지 않아도 새 스코프에 진입할 수 있습니다.
// 스코프의 계층적인 성격 때문에 어떤 변수가 스코프에 있는지 확인하는 스코프 체인(scope chain)이라는 개념이 생겼습니다.

// * 스코프 체인에 있는 모든 변수는 스코프에 있는 것이며,
// * [숨겨지지 않았다면] 접근할 수 있습니다.