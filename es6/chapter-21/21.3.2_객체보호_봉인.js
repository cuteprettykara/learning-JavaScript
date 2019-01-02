// 객체를 봉인하면 새 프로퍼티를 추가하거나, 기존 프로퍼티를 속성 변경(reconfiguration), 삭제할 수 없습니다.
// 기존 프로퍼티의 [값 변경]은 [허용]합니다.

// 클래스의 인스턴스를 사용하면서, 인스턴스의 프로퍼티를 수정하는 메소드는 동작하도록 할 때
// 봉인을 사용할 수 있습니다.

// 객체를 봉인할 때는 Object.seal을, 객체가 봉인됐는지 확인할 때는 Object.isSealed를 사용합니다.
"use strict";
class Logger {
    constructor(name) {
        this.name = name;
        this.log = [];
    }
    add(entry) {
        this.log.push({
            log: entry,
            timestamp: Date.now(),
        });
    }
}

const log = new Logger("Captain's Log");
Object.seal(log);
console.log(Object.isSealed(log));  // true

/* 기존 프로퍼티 [값] 변경 */
log.name = "Captain's Boring Log";  // OK
console.log(log);                           // OK: Logger { name: 'Captain\'s Boring Log', log: [] }

log.add("Another boring day at sea...");    // OK

/* 새 프로퍼티 추가 */
// log.newProp = 'test';   // TypeError: Cannot add property newProp, object is not extensible

/* 기존 프로퍼티 삭제 */
// delete log.name;        // TypeError: Cannot delete property 'name' of #<Logger>

/* 기존 프로퍼티 속성변경(reconfiguration) */
Object.defineProperty(log, 'log', { enumerable: false });   // TypeError: Cannot redefine property: log