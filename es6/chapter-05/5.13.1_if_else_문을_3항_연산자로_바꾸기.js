// if...else 문의 목적이 [변수]의 [값을 얻는 것]이라면(할당이든, 표현식의 일부이든, 함수의 반환값이든)
// if...else 대신 3항 연산자를 쓰는 편이 좋습니다.

if (isPrimitive(n)) {
    label = 'prime';
} else {
    label = 'non-prime';
}

// 앞의 코드는 다음과 같이 바꾸는 게 좋습니다.
label = isPrimitive(n) ? 'prime' : 'non-prime';
