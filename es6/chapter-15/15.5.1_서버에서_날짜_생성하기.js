// 서버에서 날짜를 생성할 때는 항상 
// * UTC를 사용하거나
// * 타임존을 명시하십시오.

const d = new Date(Date.UTC(2018, 11, 26, 14, 53)); // December 26, 2018 UTC
console.log(d);

// Date.UTC는 Date의 매개변수를 똑같이 받지만, 새 Date 인스턴스를 반환하지 않고,
// 해당 날짜의 숫자형 값을 반환합니다. 이 숫자를 Date 생성자에 넘기면 날짜 인스턴스를 얻을 수 있습니다.


// 특정 타임존에 있는 서버에서 날짜를 생성할 때는 moment.tz을 써서 Date 인스턴스를 만들면
// 타임존을 손으로 변환할 필요가 없습니다.

// Moment.js에 넘기는 배열은 자바스크립트의 Date 생성자에 넘기는 매개변수와 똑같고, 월은 0으로 시작합니다.
// toDate()메소드는 Moment.js 객체를 자바스크립트 Date 객체로 변환합니다.
const moment = require('moment-timezone');

const l = moment.tz([2018, 11, 26, 14, 53], 'America/Los_Angeles').toDate();
console.log(l);
const s = moment.tz([2018, 11, 26, 14, 53], 'Asia/Seoul').toDate();
console.log(s);