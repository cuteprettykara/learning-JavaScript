// 함수 안의 o와, 함수 바깥의 o는 서로 다른 개체입니다..
// 하지만 그 둘은 같은 객체를 가리키고 있습니다.
// 할당을 이용해서 차이점을 다시 알아봅시다.
function f(o) {
    o.message = "f에서 수정함";
    // 이제 함수 내부의 o는 다른 객체를 가리키게 됩니다.
    o = {
        message: "새로운 객체!"
    };
    console.log(`f 내부: o.message="${o.message}" (할당 후)`);
}

let o = {
    message: "초기값"
};

console.log(`f를 호출하기 전: o.message="${o.message}"`);   // "초기값"
f(o);                                                      // "새로운 객체!"
console.log(`f를 호출한 다음: o.message="${o.message}"`);   // "f에서 수정함"
