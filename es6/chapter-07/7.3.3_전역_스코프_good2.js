// 이제 이 함수들은 모든 스코프에서 호출할 수 있고, 명시적으로 user를 전달받습니다.
// (모듈과 객체지향 프로그래밍을 배우면 더 나은 방법이 있습니다.)
let user = {
    name: "Irena",
    age: 25
};

function greet(user) {
    console.log(`Hello, ${user.name}`);
}
function getBirthYear(user) {
    return new Date().getFullYear() - user.age;
}

greet(user);
console.log(getBirthYear(user));