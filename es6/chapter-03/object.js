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
console.log(obj);

// 비교
obj.SIZE = 0;
console.log("obj[SIZE] : " + obj[SIZE]);
console.log("obj.SIZE  : " + obj.SIZE);
