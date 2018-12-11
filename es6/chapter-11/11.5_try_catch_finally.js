// try 블록의 코드가 HTTP 연결이나 파일 같은 일종의 '자원'을 처리할 때가 있습니다.
// 프로그램에서 이 자원을 계속 가지고 있을 수는 없으므로 
// 에러가 있든 없든 어느 시점에서는 이 자원을 해제해야 합니다.
// finally 블록은 에러가 일어나든, 일어나지 않든 반드시 호출됩니다.

// 파일 처리나 HTTP 연결은 다루지 않았으므로 간단하게 console.log 문을 써서 finally 블록을 시험해 봅시다.
try {
    console.log("this line is executed...");
    throw new Error("whoops");
    console.log("this line is not ...");
} catch (err) {
    console.log("there was an error...");
} finally {
    console.log("...always executed");
    console.log("perform cleanup here");
}
// this line is executed...
// there was an error...
// ...always executed
// perform cleanup here

// 이 예제를 실행한 후 throw 문을 주석 처리한 후 다시 한 번 실행해 보십시오.
// finally 블록은 어느 쪽에서든 실행되는 걸 볼 수 있습니다.