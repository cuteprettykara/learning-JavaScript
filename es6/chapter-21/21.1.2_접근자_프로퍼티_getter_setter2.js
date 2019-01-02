// 접근자 프로퍼티를 사용하면 후자의 자연스러운 문법을 사용하면서도,
// 부주의한 접근을 차단하는 전자의 장점을 누릴 수 있습니다.
// 접근자 프로퍼티를 사용하도록 클래스를 다시 만들어 봅시다.
const USER_EMAIL = Symbol();
class User {
    set email(value) {
        if (!/@/.test(value)) throw new Error(`invalid email: ${value}`);
        this[USER_EMAIL] = value;
    }
    get email() {
        return this[USER_EMAIL];
    }
}

// 함수 2개를 사용했지만 두 함수는 email 프로퍼티 하나에 묶였습니다.
// 프로퍼티에 할당할 때는 setter가 호출되고, 할당하는 값이 첫 번째 매개변수로 전달됩니다.
// 프로퍼티를 평가할 때는 getter가 호출됩니다.
const u = new User();
u.email = "john@doe.com";
console.log(`User email: ${u.email}`);