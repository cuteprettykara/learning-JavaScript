// 그보다는 사용자 정보를 단일 객체에 보관하는 방법이 더 낫습니다.
let user = {
    name: "Irena",
    age: 25
};

function greet() {
    console.log(`Hello, ${user.name}`);
}
function getBirthYear() {
    return new Date().getFullYear() - user.age;
}

greet(user);
console.log(getBirthYear(user));

// 하지만 개선의 여지는 더 남아있습니다.
// 함수 greet와 getBirthYear는 여전히 전역 user에 의존하며, 이 객체는 어디서든 수정할 수 있습니다.
// 이제 이 함수들을 고쳐서 전역 스코프에 의존하지 않게 만들어 봅시다.