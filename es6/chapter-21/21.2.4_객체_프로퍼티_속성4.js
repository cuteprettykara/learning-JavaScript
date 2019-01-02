// 다음과 같이 프로퍼티 하나를 문 하나로 완결하는 방법도 있습니다.
const arr = [3, 1.5, 9, 2, 5.2];
Object.defineProperty(arr, 'sum', { 
    value: function() { return this.reduce((a, x) => a+x); },
    enumerable: false       // 생략 가능합니다.
});
Object.defineProperty(arr, 'avg', { 
    value: function() {return this.sum() / this.length; },
    enumerable: false       // 생략 가능합니다.
});

console.log(arr);   // [ 3, 1.5, 9, 2, 5.2 ]