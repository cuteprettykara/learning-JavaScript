// Array생성자를 써서 배열을 만들 수도 있지만 그렇게 해야 하는 경우는 별로 없습니다.

// 배열 리터럴
const arr1 = [1, 2, 3];
const arr2 = ["one", 2, "three"];
const arr3 = [[1, 2, 3], ["one", 2, "three"]];
const arr4 = [
    { name: "Fred", type: "object", luckyNumbers: [5, 7, 3] },
    [
        { name: "Susan", type: "object" },
        { name: "Anthony", type: "object" },
    ],
    1,
    function() { return "arrays can contain functions too"; },
    "three",
];

// 배열 요소에 접근하기
console.log(arr1[0]);   // "1"
console.log(arr1[2]);   // "3"
console.log(arr3[1]);   // ["one", 2, "three"]
console.log(arr4[1][0]);// { name: "Susan", type: "object" }

// 배열 길이
console.log('***********************');
console.log(arr1.length);       // 3
console.log(arr4.length);       // 5
console.log(arr4[1].length);    // 2

// 배열 길이 늘리기
console.log('***********************');
arr1[4] = 5;
console.log(arr1);              // [1, 2, 3, undefined, 5]
console.log(arr1.length);       // 5

// 배열의 현재 길이보다 큰 인덱스에 접근하는 것만으로 배열의 길이가 늘어나지는 않습니다.
console.log('***********************');
console.log(arr2[10]);          // undefined
console.log(arr2.length);       // 3

// Array 생성자(거의 사용하지 않습니다)
console.log('***********************');
const arr5 = new Array();       // [] 빈 배열
const arr6 = new Array(1, 2, 3);// [1, 2, 3]
const arr7 = new Array(2);      // 길이가 2인 배열. 요소는 모두 undefined 입니다. (실제: [ <2 empty items> ])
const arr8 = new Array("2");    // ["2"]

console.log(arr5);  // []
console.log(arr6);  // [1, 2, 3]
console.log(arr7);  // [undefined, undefined]
console.log(arr8);  // ["2"]
