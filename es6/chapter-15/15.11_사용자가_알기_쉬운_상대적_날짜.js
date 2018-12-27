// '3일 전'처럼 날짜를 상대적으로 표시하면 알기 쉽습니다.
const moment = require('moment-timezone');

let m = moment();
console.log(m.format("YYYY-MM-DD HH:mm"));
console.log('******************************************');

console.log(moment().subtract(10, 'seconds').fromNow());    // "a few seconds ago"
console.log(moment().subtract(44, 'seconds').fromNow());    // "a few seconds ago"
console.log(moment().subtract(45, 'seconds').fromNow());    // "a minute ago"

console.log(moment().subtract(5, 'minutes').fromNow());     // "5 minutes ago"
console.log(moment().subtract(44, 'minutes').fromNow());    // "44 minutes ago"
console.log(moment().subtract(45, 'minutes').fromNow());    // "an hour ago"

console.log(moment().subtract(5, 'hours').fromNow());       // "5 hours ago"
console.log(moment().subtract(21, 'hours').fromNow());      // "21 hours ago"
console.log(moment().subtract(22, 'hours').fromNow());      // "a day ago"

console.log(moment().subtract(300, 'days').fromNow());      // "10 months ago"
console.log(moment().subtract(345, 'days').fromNow());      // "a year ago"

// Moment.js에서는 적당한 시간 단위가 지나면 [다른 단위]를 써서 나타냅니다.
// 정확한 숫자보다는 이렇게 어림한 숫자가 더 친숙하게 느껴질 수 있습니다.