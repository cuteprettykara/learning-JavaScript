// Date 객체는 원래 자바에서 가져온 겁니다.
// 자바스크립트가 자바와 연관된 몇 안 되는 부분 중 하나입니다.

// [현재]의 날짜와 시간
const now = new Date();
console.log(now); // Fri Dec 14 2018 10:46:15 GMT+0900 (한국 표준시)

// 특정 날짜
const halloween = new Date(2016, 9, 31); // 월은 0에서 시작합니다. 즉 9는 10월입니다.

// 특정 날짜와 [시간]
const halloweenParty = new Date(2016, 9, 31, 19, 0); // 19:00 = 7:00 pm

// 각 부분 가져오기
console.log(halloweenParty.getFullYear());      // 2016
console.log(halloweenParty.getMonth());         // 9 (10월. 0은 1월)
console.log(halloweenParty.getDate());          // 31
console.log(halloweenParty.getDay());           // 1 (월요일. 0은 일요일)
console.log(halloweenParty.getHours());         // 19
console.log(halloweenParty.getMinutes());       // 0
console.log(halloweenParty.getSeconds());       // 0
console.log(halloweenParty.getMilliseconds());  // 0