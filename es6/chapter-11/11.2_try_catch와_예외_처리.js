// 예외 처리는 try...catch 문을 사용합니다.
// 이전 예제의 validateEmail은 사용자가 이메일 주소에서 @를 빼먹은, [예상할 수 있는 에러]는 처리할 수 있습니다.
// 하지만 예상치 못한 에러가 일어날 가능성은 여전한데,
// 예를 들어 부주의한 프로그래머가 email에 문자열이 아닌 어떤 것을 할당한다고 합시다.
// 지금대로라면, 이전 예제의 함수는 email에 null, 숫자, 객체 등 문자열이 아닌 무언가가 들어온다면 에러를 일으킵니다.
// 이렇게 [예상치 못한 에러]에 대처하려면 try...catch 문으로 코드 전체를 감쌀 수 있습니다.
function validateEmail(email) {
    return email.match(/@/) ? 
        email :
        new Error(`invalid email: ${email}`);
}

const email = null;   // 예상치 못한 에러

try {
    const validatedEmail = validateEmail(email);
    if (validatedEmail instanceof Error) {
        console.error(`Error: ${validatedEmail.message}`);
    } else {
        console.error(`Valid email: ${validatedEmail}`);
    }
} catch (err) {
    console.error(`Error: ${err.message}`);
}