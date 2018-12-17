// [할당]이 주 목적인 if문은 단축 평가를 사용하는 OR 표현식을 써서 간결하게 줄일 수 있습니다.

if (!options) options = {};

// 앞의 코드는 다음과 같이 쓸 수 있습니다.

options = options || {}