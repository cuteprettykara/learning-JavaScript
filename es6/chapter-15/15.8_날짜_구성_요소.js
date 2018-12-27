const d = new Date(Date.UTC(2018, 11, 27));

// 다음 결과는 한국 기준입니다.
console.log(d.getFullYear());       // "2018"
console.log(d.getMonth());          // "11" : 12월
console.log(d.getDate());           // "27"
console.log(d.getDay());            // "4" : 목요일
console.log(d.getHours());          // "9" : 9시
console.log(d.getMinutes());        // "0"
console.log(d.getSeconds());        // "0"
console.log(d.getMilliseconds());   // "0"
console.log('******************************************');

// UTC기준 메소드도 있습니다.
console.log(d.getUTCFullYear());    // // "2018"
console.log(d.getUTCMonth());          // "11" : 12월
console.log(d.getUTCDate());           // "27"
console.log(d.getUTCDay());            // "4" : 목요일
console.log(d.getUTCHours());          // "0" : 0시
console.log(d.getUTCMinutes());        // "0"
console.log(d.getUTCSeconds());        // "0"
console.log(d.getUTCMilliseconds());   // "0"