// 마지막으로 Object.defineProperties도 있습니다.
// 바로 앞 예제를 Object.defineProperties를 써서 다음과 같이 고칠 수 있습니다.
const arr = [3, 1.5, 9, 2, 5.2];
Object.defineProperties(arr, {
    sum: {
        value: function() { return this.reduce((a, x) => a+x); },
        enumerable: false       // 생략 가능합니다.
    }, 
    avg: {
        value: function() {return this.sum() / this.length; },
        enumerable: false       // 생략 가능합니다.
    }
});

console.log(arr);   // [ 3, 1.5, 9, 2, 5.2 ]