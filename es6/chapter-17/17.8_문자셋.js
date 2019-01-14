// 문자셋은 [글자 하나를] 다른 것으로 대체(alternation)하는 방법을 간단하게 줄인 겁니다.
// 예를 들어 문자열에 있는 [숫자]를 모두 찾고 싶다고 합시다.
// 대체를 사용한다면 다음과 같이 할 수 있습니다.
const beer99 = "99 bottles of beer on the wall " +
    "take 1 down and pass it around --- " + 
    "98 bottles of beer on the wall.";

const matches = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
console.log(matches);       // [ '9', '9', '1', '9', '8' ]

// 좋은 방법은 아닌 것 같군요.
// 만약 숫자가 아니라 글자를 찾아야 한다면 [다시 만들어야 합니다].
// 숫자와 글자를 모두 찾아야 할 때도 [다시 만들어야 합니다].
// 지겹죠? 문자셋은 이런 경우에 편리하게 쓸 수 있습니다.
// 문자셋은 [이러이러한 문자들이 들어갈 수 있다]는 것을 간략하게 표시할 수 있습니다.
// 범위를 지원하므로 더 간략하게 표시하는 것도 가능합니다.
// 위 예제를 다음과 같이 고쳐 쓸 수 있습니다.
const m1 = beer99.match(/[0123456789]/g);   // 가능합니다.
const m2 = beer99.match(/[0-9]/g);          // 더 좋군요.
console.log(m1);            // [ '9', '9', '1', '9', '8' ]
console.log(m2);            // [ '9', '9', '1', '9', '8' ]

// 범위를 결합하는 것도 가능합니다.
// 다음 정규식은 문자열에서 글자와 숫자, 기타 구두점을 찾습니다(사실 공백만 빼고 다 찾습니다).
/* const match = beer99.match(/[\-0-9a-z.]/ig);
console.log(match); */

// 순서는 중요하지 않습니다. 즉 /[.a-z0-9-]/ 도 똑같습니다. 
/* const match2 = beer99.match(/[.a-z0-9-]/ig);
console.log(match2); */

// 하이픈은 이스케이프해야 합니다.
// 이스케이프하지 않으면 정규식은 하이픈을 범위를 표시하는 메타 문자라고 간주합니다
// (닫는 대괄호 바로 앞에 쓰는 하이픈은 이스케이프하지 않아도 됩니다).

// 문자셋은 특정 문자, 또는 범위를 제외(negate)하고 찾을 수도 있습니다.
// 문자셋을 제외할 때는 다음과 같이 캐럿(^)을 맨 앞에 쓰면 됩니다.
const match3 = beer99.match(/[^\-0-9a-z.]/ig);
console.log(match3);

// 위 정규식은 원래 문자열에서 공백만 찾습니다. 
// 처음부터 공백만 찾으려 했다면 더 나은 방법이 있는데, 곧 알게 됩니다.

[참고]
// 일반적으로 마침표(.)나 더하기(+)같은 메타문자들이 집합의 구성원일 때는 문자 그대로 취급하기 때문에, 
// 굳이 이스케이프 할 필요가 없다. 그러나 이스케이프 한다고 문제가 생기지는 않는다.