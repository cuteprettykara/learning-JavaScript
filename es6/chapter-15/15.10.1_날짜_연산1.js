// 날짜는 숫자이므로 날짜에서 날짜를 빼면 몇 밀리초가 지났는지 알 수 있습니다.
const d1 = new Date(1996, 2, 1);
const d2 = new Date(2009, 4, 27);

const msDiff = d2 - d1;
console.log(msDiff);                    // 417744000000 ms

const daysDiff = msDiff/1000/60/60/24;
console.log(daysDiff);                  // 4835 days

// Array.prototype.sort를 써서 날짜를 정렬할 수도 있습니다.
const dates=[];

// 랜덤한 날짜를 몇 개 만듭니다.
const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min;
for (let i = 0; i < 10; i++) {
   dates.push(new Date(min + delta*Math.random()));
}

// dates 배열은 랜덤이므로 아마 뒤죽박죽일 겁니다.
// 다음과 같이 역순으로 정렬할 수 있습니다.
dates.sort((a, b) => b - a);
console.log(dates);

// 오름차순으로 정렬할 수 있습니다.
dates.sort((a, b) => a - b);
console.log(dates);

// 참고: https://code.i-harness.com/ko-kr/q/16f7191