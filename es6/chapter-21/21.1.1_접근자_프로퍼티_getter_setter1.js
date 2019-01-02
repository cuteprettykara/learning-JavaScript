// 객체 프로퍼티에는
// * 데이터 프로퍼티와
// * 접근자(accessor) 프로퍼티
// 두 가지가 있습니다.

// 접근자 프로퍼티는 메소드와 비슷한데,
// * getter와 setter 두 가지 함수로 구성된다는 것과,
// * 접근했을 때 함수라기보다는 데이터 프로퍼티와 비슷하게 동작한다는 점이 조금 다릅니다.
// 이런 면에서 접근자 프로퍼티를 동적 프로퍼티라 부르기도 합니다.

// 동적 프로퍼티에 대해 생각해 보겠습니다.
// @기호가 들어있는 문자열은 모두 유효한 이메일 주소라고 간주합니다.
const USER_EMAIL = Symbol();
class User {
    setEmail(value) {
        if (!/@/.test(value)) throw new Error(`invalid email: ${value}`);
        this[USER_EMAIL] = value;
    }
    getEmail() {
        return this[USER_EMAIL];
    }
}

// 이 예제에서 USER_EMAIL 프로퍼티 대신 두 가지 메소드를 쓴 이유는 잘못된 이메일 주소가
// 저장되는 것을 막으려는 겁니다.
// 프로퍼티에는 심볼을 써서 실수로 직접 접근하는 일을 막았습니다.
// email이나 _email같은 문자열 프로퍼티를 썼다면 직접 접근하는 일일 막을 수 없습니다.

// 이런 패턴은 널리 쓰이고 잘 동작하긴 하지만 조금 불편하긴 합니다.
// 이 클래스는 다음과 같은 방식으로 사용해야 합니다.
const u = new User();
u.setEmail("john@doe.com");
console.log(`User email: ${u.getEmail()}`);

// 하지만 우리는 다음과 같은 방식을 더 자연스럽게 느낍니다.
const u = new User();
u.email = "john@doe.com";
console.log(`User email: ${u.email}`);