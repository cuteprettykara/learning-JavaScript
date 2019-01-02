// 자바스크립트의 유연성은 매우 강력하기도 하지만, 그만큼 문제가 생길 소지도 많습니다.
// 어떤 코드든, 다른 객체를 쉽게 바꿀 수 있으므로, 의도와 달리 위험한 코드를 만들 가능성이 항상 존재합니다.

// 자바스크립트에는 객체를 보호해서 의도하지 않은 수정을 막고, 의도적인 공격은 더욱 어렵게 만드는
// 세 가지 메커니즘이 있습니다. 동결(freezing), 봉인(sealing), 확장 금지(preventing extension) 입니다.

// 동결된 객체는 수정할 방법이 없습니다.
// 일단 객체를 동결하면 다음과 같은 작업이 불가능해집니다.
// * 프로퍼티 값 수정 또는 할당
// * 프로퍼티 값을 수정하는 메소드 호출
// * setter 호출
// * 새 프로퍼티 추가
// * 새 메소드 추가
// * 기존 프로퍼티나 메소드의 설정 변경

// 간단히 말해, 객체를 동결하면 그 객체는 문자열이나 숫자처럼 불변이 됩니다.
// 객체를 동결하면 상태를 바꾸는 메소드가 모두 쓸모없어지므로, [데이터만 들어있는 객체]에서 가장 유용합니다.

// 객체를 동결할 때는 Object.freeze를 사용하고, 동결됐는지 확인할 때는 Object.isFrozen을 사용합니다.
// 회사, 버전, 빌드ID, 저작권 정보 등 앞으로 바뀔 일이 없는 프로그램에 대한 정보를 객체에 보관한다고 생각해 봅시다.
"use strict";

const appInfo = {
    company: 'White Knight Software, Inc.',
    version: '1.3.5',
    buildId: '0a995448-ead4-4a8b-b050-9c9083279ea2',
    // 이 함수는 getter이므로 동결한 상태에서도 계속 동작합니다.
    copyright() {
        return `© ${new Date().getFullYear()}, ${this.company}`;
    },
};

Object.freeze(appInfo);
console.log(Object.isFrozen(appInfo)); // true

appInfo.newProp = 'test';       // TypeError: Cannot add property newProp, object is not extensible

delete appInfo.company;         // TypeError: Cannot delete property 'company' of #<Object>

appInfo.company = 'test';       // TypeError: Cannot assign to read only property 'company' of object '#<Object>'

Object.defineProperty(appInfo, 'company', { enumerable: false });   // TypeError: Cannot redefine property: company
