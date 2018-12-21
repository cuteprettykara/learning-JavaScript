// 이터레이터는 [그 자체로 쓸모가 있다기보다는], 더 쓸모 있는 동작이 가능해지도록 한다는데 의미가 있습니다.
// 이터레이터 프로토콜은 [모든 객체]를 이터러블(iterable) 객체로 바꿀 수 있습니다.
// 메시지에 타임스탬프를 붙이는 로그 클래스가 필요하다고 생각해 봅시다.

class Log {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push({ message, timestamp: Date.now() });
    }

}

// 지금까지는 좋습니다.
// 로그를 기록한 항목을 순회(iterate)하고 싶다면 어떻게 해야 할까요?
// 물론 log.messages에 직접 접근할 수는 있지만, log를 [배열을 조작하듯] 할 수 있다면 더 좋을 겁니다.
// [이터레이션 프로토콜]을 사용하면 가능합니다.