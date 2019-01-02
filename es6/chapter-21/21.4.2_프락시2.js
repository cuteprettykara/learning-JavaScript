// 마찬가지로 프로퍼티에 값을 할당하려 할 때 set 핸들러로 가로챌 수 있습니다.
// 객체에 위험한 프로퍼티가 있어서 한 단계를 더 거치지 않으면
// 값을 할당하거나 메소드를 호출할 수 없게 하려고 합니다.
const cook = {
    name: "Walt",
    redPhosphorus: 100, // 위험합니다.
    water: 500          // 안전합니다.
};

const protectedCook = new Proxy(cook, {
    set(target, key, value) {
        if (key === 'redPhosphorus') {
            if (target.allowDangerousOperations) 
                return target.redPhosphorus = value;
            else 
                return console.log("Too dangerous");
        }

        // 다른 프로퍼티는 모두 안전합니다.
        target[key] = value;
    }
});

protectedCook.water = 550;          // 550
protectedCook.redPhosphorus = 150;  // "Too dangerous"
console.log(cook);  // { name: 'Walt', redPhosphorus: 100, water: 550 }

protectedCook.allowDangerousOperations = true;
protectedCook.redPhosphorus = 150;  // 150
console.log(cook);  // { name: 'Walt', redPhosphorus: 150, water: 550, allowDangerousOperations: true }

// 이 장에서 설명한 것은 프락시로 할 수 있는 일의 극히 일부에 불과합니다.
// 프락시에 대해 더 알고 싶다면 
// 악셀 라우슈마이어(Axel Rauschmayer)가 쓴 글인 [ES6 프락시와 메타프로그래밍](http://www.2ality.com/2014/12/es6-proxies.html)을 먼저 읽고,
// MDN 문서 http://mzl.la/1QZKM7U를 읽길 권합니다.