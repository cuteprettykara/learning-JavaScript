// 함수 안의 o와, 함수 바깥의 o는 [서로 다른 개체]입니다..
// 하지만 그 둘은 [같은 객체]를 가리키고 있습니다.
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

console.log(`f를 호출하기 전: o.message="${o.message}"`);
f(o);                                                   
console.log(`f를 호출한 다음: o.message="${o.message}"`);
// f를 호출하기 전: o.message="초기값"
// f 내부: o.message="새로운 객체!" (할당 후)
// f를 호출한 다음: o.message="f에서 수정함"

// 이 예제를 이해하는 핵심은 함수 안의 o와, 함수 바깥의 o는 다르다는 겁니다.
// f를 호출하면 둘은 같은 객체를 가리키지만,
// f내부에서 o에 할당한 객체는 새로운, 전혀 다른 객체입니다.
// 함수 바깥의 o는 여전히 원래 객체를 가리키고 있습니다.