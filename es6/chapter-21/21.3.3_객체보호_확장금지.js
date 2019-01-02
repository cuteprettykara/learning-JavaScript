// 마지막으로, 가장 약한 제약인 확장 금지입니다.
// 객체에 새 프로퍼티를 추가하는 것만 금지됩니다.
// 프로퍼티에 값을 할당하거나, 삭제하거나, 속성을 변경하는 작어븐 모두 허용됩니다.

// 확장을 금지할 때는 Object.preventExtensions,
// 확장이 금지됐는지 확인할 때는 Object.isExtensible을 사용합니다.
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

const log2 = new Logger("First Mate's Log");
Object.preventExtensions(log2);
console.log(Object.isExtensible(log2)); // false

log2.name = 'test';                         // OK
log2.add("Another boring day at sea...");   // OK

// log2.newProp = 'test';  // TypeError: Cannot add property newProp, object is not extensible

log2.name = 'test';     // OK

delete log2.name;       // OK

Object.defineProperty(log2, 'log', { enumerable: false });  // OK

// 필자는 Object.preventExtensions를 자주 사용하지는 않습니다.
// 객체의 확장을 막아야 할 때는 보통 프로퍼티 삭제나 속성 변경도 금지해야 할 때가 대부분이므로
// 객체 봉인을 더 많이 쓰는 편입니다.

// 동작                 일반 객체   동결 객체   봉인 객체   확장금지 객체
// ------------------------------------------------------------------
// 프로퍼티 추가            O           X           X           X
// 프로퍼티 읽기            O           O           O           O
// 프로퍼티 값 설정         O           X           O           O
// 프로퍼티 속성 변경       O           X           X           O
// 프로퍼티 삭제            O           X           X           O