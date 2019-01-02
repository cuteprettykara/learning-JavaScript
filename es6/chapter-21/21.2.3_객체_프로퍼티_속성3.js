// Object.defineProperty는 배열 프로퍼티를 나열할 수 없게 만들 때 주로 사용합니다.
// 배열은 원래 프로퍼티를 사용하지 않도록 설계됐으므로 문자열이나 심볼 프로퍼티는 
// 사용하지 않는 게 좋다고 언급한 적이 있습니다만, 충분히 생각하고 조심스럽게 사용한다면
// 배열 프로퍼티도 유용하게 쓸 수 있습니다.

// 배열에서 for...in이나 Object.keys를 사용하는 것 역시 권장하지는 않지만
// 다른 개발자가 사용하는 걸 막을 수는 없습니다.
// 따라서 배열에 숫자형 프로퍼티가 아닌 프로퍼티를 추가한다면,
// 다른 누군가가 for...in이나 Object.keys를 사용했을 때, 노출되지 않도록 나열할 수 없게 만들어야 합니다.
const arr = [3, 1.5, 9, 2, 5.2];
arr.sum = function() { return this.reduce((a, x) => a+x); }
arr.avg = function() { return this.sum() / this.length; }

console.log(arr);   // [ 3, 1.5, 9, 2, 5.2, sum: [Function], avg: [Function] ]

Object.defineProperty(arr, 'sum', { enumerable: false });
Object.defineProperty(arr, 'avg', { enumerable: false });

console.log(arr);   // [ 3, 1.5, 9, 2, 5.2 ]
