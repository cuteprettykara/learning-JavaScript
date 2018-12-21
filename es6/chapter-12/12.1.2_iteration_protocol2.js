// [이터레이션 프로토콜]은 
// 1. [클래스에] 심볼 메소드 Symbol.iterator가 있고,
// 2. 이 메소드가 [이터레이터처럼 동작하는 객체]를 반환한다면, 즉
//    [value와 done 프로퍼티가 있는 객체를 반환하는 next() 메소드]를 가진 [객체]를 반환한다면
// 그 클래스의 [인스턴스]는 [이터러블 객체]라는 뜻입니다.

// Log 클래스에 Symbol.iterator 메소드를 추가합시다.
class Log {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push({ message, timestamp: Date.now() });
    }
    [Symbol.iterator]() {
        return this.messages.values();
    }
}

// 이제 Log 인스턴스를 [배열처럼] 순회활 수 있습니다.

const log = new Log();
log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another vessel");

// 로그를 [배열처럼] 순회합니다.
for (const entry of log) {
    console.log(`${entry.message} @ ${entry.timestamp}`);
}

// 이 예제에서는 messages [배열에서 이터레이터를 가져와] 이터레이터 프로토콜을 구현했지만,
// 다음과 같이 직접 이터레이터를 만들 수도 있습니다.