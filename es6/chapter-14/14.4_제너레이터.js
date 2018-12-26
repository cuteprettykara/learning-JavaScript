// 제너레이터는 원래 동기적인 성격을 가졌지만,
// 프라미스와 결합하면 비동기 코드를 효율적으로 관리할 수 있습니다.

// 비동기 코드에서 가장 어려운 부분이 무엇일까요? 동기적인 코드에 비해 [만들기가 어렵다]는 점입니다.
// 어려운 문제를 해결해야 할 때 우리는 대개 동기적으로 생각합니다.
// 하지만 이렇게 하면 성능 문제가 있습니다.
// 비동기 코드는 성능 문제를 해결하기 위해 등장했습니다.

// 비동기 코드의 난해함은 젖혀놓고, 성능 개선만 누릴 수 있다면 정말 좋지 않을까요?
// 제너레이터를 사용하면 일정 부분 가능해집니다.

// 앞에서 언급한 콜백 헬을 다시 살펴봅시다.
// 파일 세 개를 읽고 1분간 기다린 다음, 그 내용을 합쳐서 네 번째 파일에 쓰는 문제였습니다.
// 사람은 대개 이런 식으로 하려고 합니다.

// dataA = read contents of 'a.txt'
// dataB = read contents of 'b.txt'
// dataC = read contents of 'c.txt'
// wait 60 secconds
// write dataA + dataB + dataC to 'd.txt'

// 제너레이터를 사용하면 이런 자연스러운 발상과 [비슷한 코드]를 작성할 수 있습니다.
// 물론 약간의 선행 작업이 필요하긴 합니다.

// 가장 먼저 할 일은 노드의 [오류 우선 콜백을] [프라미스로] 바꾸는 겁니다.
// 이 기능을 nfcall(Node function call) 함수로 만들겠습니다.
function nfcall(f, ...args) {
    return new Promise(function(resolve, reject) {
        f.call(null, ...args, function(err, ...args) {
            if (err) return reject(err);
            resolve(args.length<2 ? args[0] : args);
        });
    });
}

// 이 함수는 Q 프라미스 라이브러리의 nfcall 메소드를 참고해 만들었고, 같은 이름을 붙였습니다.

// 이제 [콜백을 받는 노드 스타일 메소드를] 모두 [프라미스로] 바꿀 수 있습니다.
// setTimeout을 써야 하는데, setTimeout은 노드보다 먼저 나왔고, 오류 우선 콜백의 패턴을 따르지 않습니다.
// 그러니 같은 기능을 가진 ptimeout(promise timeout) 함수를 새로 만듭니다.
function ptimeout(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, delay);
    });
}

// 다음에 필요한 것은 [제너레이터 생성기]입니다.
// 제너레이터는 원래 동기적입니다. 하지만 제너레이터는 호출자와 통신할 수 있으므로,
// * 제너레이터와의 통신을 관리하고
// * 비동기적 호출을 처리하는 함수를 만들 수 있습니다.
// 이런 역할을 할 함수 grun(generator run)을 만들겠습니다.
function grun(g) {
    const it = g();
    (function iterate(val) {
        const x = it.next(val);
        if (!x.done) {
            if (x.value instanceof Promise) {
                x.value.then(iterate).catch(err => it.throw(err));
            } else {
                setTimeout(iterate, 0, x.value);
            }
        }
    })();
}

// grun은 기초적인 재귀 실행기입니다.
// grun에 제너레이터 함수를 넘기면 해당 함수가 실행됩니다.
// yield로 값을 넘긴 제너레이터는 이터레이터에서 next를 호출할 때까지 기다립니다.
// grun은 그 과정을 재귀적으로 반복합니다.

// 이터레이터에서 프라미스를 반환하면, grun은 [프라미스가 완료될 때까지 기다린 다음], 이터레이터 실행을 재개합니다.
// 이터레이터가 값을 반환하면, 이터레이터 실행을 [즉시] 재개합니다.

// grun에서 iterate를 바로 호출하지 않고 setTimeout을 거친 이유는
// 자바스크립트 엔진은 재귀 호출을 비동기적으로 실행할 때 메모리를 좀 더 빨리 회수합니다.

// * nfcall은 [과거의 방법]인 노드 오류 우선 콜백을 [현재의 방법]인 프라미스에 적응시키고,
// * grun은 [미래의 기능]을 [현재]로 가져옵니다.

// ES7에서 도입하리라 예상되는 await 키워드는 grun과 거의 같은 기능을 지원하며, 더 자연스러운 문법을 제공할 겁니다.

// 어려운 부분은 다 끝냈으니, 편리하게 사용하는 방법을 알아볼 차례입니다.
// 이 장에서 언급한 '사람이라면 대개 이렇게 생각했을' 방법을 그대로 사용할 수 있습니다.
const fs = require('fs');

function* theFutureIsNow() {
    const dataA = yield nfcall(fs.readFile, 'a.txt');
    const dataB = yield nfcall(fs.readFile, 'b.txt');
    const dataC = yield nfcall(fs.readFile, 'c.txt');
    yield ptimeout(10*1000);
    yield nfcall(fs.writeFile, 'd.txt', dataA+dataB+dataC);
}

// 콜백 헬보다는 훨씬 낫고, 프라미스 하나만을 쓸 때보다 더 단순합니다.
// 실행 또한 간단합니다.
grun(theFutureIsNow);