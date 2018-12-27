// Moment.js의 format 메소드를 써서 날짜를 원하는 형식으로 만들 수 있습니다.
const d = new Date(Date.UTC(2018, 11, 27));

// 다음 결과는 한국 기준입니다(chrome browser에서 실행).
console.log(d.toLocaleDateString());        // "2018-12-27"
console.log(d.toLocaleTimeString());        // "오전 9:00:00"
console.log(d.toTimeString());              // "09:00:00 GMT+0900 (한국 표준시)"
console.log(d.toUTCString());               // "Thu, 27 Dec 2018 00:00:00 GMT"

console.log('******************************************');
const moment = require('moment-timezone');

console.log(moment(d).format("YYYY-MM-DD"));                // "2018-12-27"
console.log(moment(d).format("YYYY-MM-DD HH:mm"));          // "2018-12-27 09:00"
console.log(moment(d).format("YYYY-MM-DD HH:mm Z"));        // "2018-12-27 09:00 +09:00"
console.log(moment(d).format("YYYY-MM-DD HH:mm [UTC]Z"));   // "2018-12-27 09:00 UTC+09:00"
console.log(moment(d).format("YYYY년 M월 D일 HH:mm"));      // "2018년 12월 27일 09:00"

console.log(moment(d).format("dddd, MMMM [the] Do, YYYY")); // "Thursday, December the 27th, 2018"

console.log(moment(d).format("h:mm a"));    // "9:00 am"

// 메탄 문자가 길면 해당하는 구성 요소도 더 길게 표시됩니다.
// 예를 들어 "M"은 1, 2, 3으로 바뀌고 "MM"은 01, 02 ,03으로 바뀝니다.
// "MMM"은 Jan, Feb, Mar로 바뀌고, "MMMM"은 Jaunuary, February, March로 바뀝니다.

// 소문자 "o"는 서수로 바뀝니다. 즉 "Do"는 1st, 2nd, 3rd 로 바뀝니다.

// M이나 o등을 있는 그대로 표시하려면 대괄호 안에 넣으면 됩니다.
// 예를 들어 "[M]M"은 M1, M2로 바뀝니다.

// Moment.js조차 EST나 PST같은 타임존 약어는 완전히 해결하지 못했습니다.
// 타임존 약어에 관한 일관된 국제 표준이 없기 때문에 Moment.js는 포맷 문자 z를 폐기했습니다.