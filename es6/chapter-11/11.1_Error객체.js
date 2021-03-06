// 예외처리(exception handling)는 에러를 컨트롤하는 메커니즘입니다.
// [에러처리]라고 하지 않고, [예외처리]라고 하는 이유는 
// 예상치 못한 상황에 대처하는 방식이기 때문입니다.

// 예상할 수 있는 에러 : 누군가 폼에 잘못된 이메일 주소를 입력하는 경우(사람들은 항상 오타를 내니까요)
// 예상치 못한 에러(예외): 디스크에 남은 공간이 없어진다거나, 믿을 만한 서비스가 갑자기 정지된다거나 하는 경우.

// 자바스크립트에는 내장된 Error 객체가 있고, 이 객체는 에러 처리에 간편하게 사용할 수 있습니다.
// Error 인스턴스를 만들면서 에러 메시지를 지정할 수 있습니다.
const err = new Error("invalid email");

// Error 인스턴스를 만드는 것만으로는 아무 일도 일어나지 않습니다.
// 이 인스턴스는 에러와 통신하는 수단입니다.
// 이메일주소의 유효성을 검사하는 함수가 있다고 합시다. 이 함수는 검사한 이메일 주소가 
// * 올바르면 이메일 주소를 문자열로 반환합니다.
// * 바르지 않다면 Error 인스터스를 반환합니다.
// 단순함을 위해 앳 기호(@)만 있으면 유효한 이메일 주소로 간주하기로 합시다.
function validateEmail(email) {
    return email.match(/@/) ? 
        email :
        new Error(`invalid email: ${email}`);
}

// 이 함수를 사용할 때는 instanceof 연산자를 써서 Error 인스턴스가 반환됐는지 확인합니다.
// 에러 메시지는 [message] 프로퍼티에 있습니다.
const email = "jane@doe.com";
// const email = null;   // 예상치 못한 에러 : TypeError: Cannot read property 'match' of null

const validatedEmail = validateEmail(email);
if (validatedEmail instanceof Error) {
    console.error(`Error: ${validatedEmail.message}`);
} else {
    console.error(`Valid email: ${validatedEmail}`);
}

// 이 방법도 Error 인스턴스를 활용하는 유용한 방법이긴 하지만,
// Error 인스턴스는 예외 처리에서 더 자주 사용됩니다.