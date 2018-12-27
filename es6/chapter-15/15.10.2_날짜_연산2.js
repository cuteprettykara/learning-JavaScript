// Moment.js에는 날짜를 더하거나 빼는 유용한 메소드도 들어 있습니다.
const moment = require('moment-timezone');

let m = moment();                               // 현재
console.log(m.format("YYYY-MM-DD HH:mm"));      // "2018-12-27 11:20"

m.add(3, 'days');                               // m은 이제 3일 뒤입니다.
console.log(m.format("YYYY-MM-DD HH:mm"));      // "2018-12-30 11:20"

m.subtract(2, 'years');                         // m은 이제 2년 전으로부터 3일이 니난 날짜입니다.
console.log(m.format("YYYY-MM-DD HH:mm"));      // "2016-12-30 11:20"

console.log('******************************************');
m = moment();                                   // 리셋 
console.log(m.format("YYYY-MM-DD HH:mm"));      // "2018-12-27 11:20"
m.startOf('year');                              // m은 이제 올해의 1월 1일입니다.
console.log(m.format("YYYY-MM-DD HH:mm"));      // "2018-01-01 00:00"
m.endOf('month');                               // m은 이제 올해의 1월 31일입니다.
console.log(m.format("YYYY-MM-DD HH:mm:ss"));   // "2018-01-31 23:59"

console.log('******************************************');
// Moment.js는 메소드를 체인으로 연결할 수도 있습니다.
let m2 = moment()
    .add(10, 'hours')
    .subtract(3, 'days')
    .endOf('month');    // m은 이제 3일전 으로부터 10시간 뒤인 달의 마지막 순간입니다.

console.log(m2.format("YYYY-MM-DD HH:mm:ss"));  // "2018-12-31 23:59:59"
