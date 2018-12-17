// Number.EPSILON과 관계 연산자를 사용해서, '느슨하게' 비교하고 성공적으로 루프를 빠져나갈 수 있습니다.
let n = 0;
while (true) {
    n += 0.1;
    console.log(n);
    // if (Math.abs(n - 0.3) < Number.EPSILON) break;
    if (n > 0.3) break;
}

console.log(`Stopped at ${n}`);

// 그냥 n이 0.3보다 큰지 확인하는 간단한 방법이 있지만, 여기서 사용한 방법은
// 두 개의 더블 형식이 같다고 할 수 있을 만큼 가까운 숫자인지 판단할 때
// 일반적으로 사용하는 방법입니다.