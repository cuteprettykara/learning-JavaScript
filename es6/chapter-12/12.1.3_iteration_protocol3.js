// 이 예제에서는 messages 배열에서 이터레이터를 가져와 이터레이터 프로토콜을 구현했지만,
// 다음과 같이 직접 이터레이터를 만들 수도 있습니다.
class Log {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push({ message, timestamp: Date.now() });
    }
    [Symbol.iterator]() {
        let i = 0;
        const messages = this.messages;
        return {
            next() {
                if ((i >= messages.length))
                    return { value: undefined, done: true };

                return { value: messages[i++], done: false };
            }
        };
    }
}

const log = new Log();
log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another vessel");

// 로그를 배열처럼 순회합니다.
for (const entry of log) {
    console.log(`${entry.message} @ ${entry.timestamp}`);
}
