const obj = {};

// 프로퍼티 이름에 유효한 식별자를 써야 멤버 접근 연산자(.)를 사용할 수 있습니다.
obj.color = "yellow";

// 프로퍼티 이름에 유효한 식별자가 아닌 이름을 쓴다면, 계산된 멤버 접근 연산자([])를 써야 합니다.
obj["not an identifier"] = 3;
console.log(obj["not an identifier"]);

// 프로퍼티 이름이 유효한 식별자여도 계산된 멤버 접근 연산자로 접근할 수 있습니다.
console.log(obj["color"]);

// 심볼 프로퍼티에 접근할 때도 계산된 멤버 접근 연산자를 사용합니다.
const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj[SIZE]);


// 콘솔에서는 SIZE를 obj의 프로퍼티로 나열하지 않는다.
console.log(obj);   // {color: "yellow", not an identifier: 3, Symbol(): 8}

// 비교
obj.SIZE = 0;
console.log("obj[SIZE] : " + obj[SIZE]);    // 8
console.log("obj.SIZE  : " + obj.SIZE);     // 0

// 우리는 변수 obj에 저장된 객체를 수정했지만, obj는 항상 같은 객체를 가리키고 있었습니다.
// obj에 저장한 것이 문자열이나 숫자, 기타 다른 원시값이었다면 수정할 때마다 다른 값을 가리켰을 겁니다.
// 달리 말해 obj은 계속 같은 객체를 가리키고, 바뀐 것은 객체의 프로퍼티입니다.

// sam1과 sam2의 프로퍼티는 똑같지만, 둘은 서로 다른 객체입니다.
// 원시값과는 반대입니다.
const sam1 = { name: 'Sam', age: 4 };
const sam2 = { name: 'Sam', age: 4 };
console.log(sam1 === sam2); // false

// 값이 숫자 3인 두 변수는 같은 원시 값을 가리킵니다.
const a1 = 3;
const a2 = 3;
console.log(a1 === a2);     // true

// 객체에 함수를 담을 수도 있습니다.
sam2.speak = function() { return "Meow!"; };

// 이제 함수 뒤에 괄호를 붙여 함수를 호출할 수 있습니다.
console.log(sam2.speak());  // Meow!

// 객체에서 프로퍼티를 제거할 때는 delete 연산자를 사용합니다.
delete sam2.speak;
sam2.speak();