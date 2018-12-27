// 서버에서 브라우저로 날짜를 전송하거나, 반대로
// 브라우저에서 서버로 날짜를 전송할 때는 조금 복잡할 수 있습니다.

// 서버와 브라우저가 다른 타임존에 있더라도, 
// 사용자는 자신의 타임존을 기준으로 날짜를 보고 싶어 할 겁니다.

// 다행히 자바스크립트의 Date 인스턴스는 날짜를 저장할 때 
// UTC를 기준으로 유닉스 타임스탬프를 저장하므로, Date 객체를 그냥 전송해도 [일반적으로] 안전합니다.

// 자바스크립트에서 날짜를 전송하는 가장 확실한 방법은 JSON을 사용하는 겁니다.
// 날짜는 JSON에서 1:1 대칭이 되게끔 파싱할 수 없으므로
// JSON명세에는 날짜에 대한 데이터 타입을 정의하지 않았습니다.
const before = { d:new Date() };
console.log(before);
console.log(before.d instanceof Date);  // true
const json = JSON.stringify(before);
console.log(json);
console.log('****************************************');

const after = JSON.parse(json);
console.log(after);
console.log(after.d instanceof Date);   // false
console.log(typeof after.d);            // "string"

// 전송된 문자열에서 날짜를 '복구'하는 것은 가능합니다.
console.log('****************************************');
after.d = new Date(after.d);
console.log(after.d);
console.log(after.d instanceof Date);   // true

// 원래 날짜가 어느 타임존에 있었든, 일단 JSON으로 인코딩된 날짜는 UTC입니다.
// 그리고 JSON으로 인코딩된 문자열을 Date() 생성자에 넘겨서 얻은 날짜는 사용자의 타임존을 기준으로 표시됩니다.