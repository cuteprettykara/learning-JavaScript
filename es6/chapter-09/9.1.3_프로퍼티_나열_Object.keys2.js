// 객체의 [프로퍼티 키]를 [배열]로 가져와야 할 때는 Object.keys가 편리합니다.
// 예를 들어 객체에서 [x로 시작하는] 프로퍼티를 모두 가져온다면 다음과 같이 할 수 있습니다.
const o = {apple: 1, xochitl: 2, ballon: 3, guitar: 4, xylophone: 5};

// 방법 1
Object.keys(o)
    .filter(prop => prop.match(/^x/))
    .forEach(prop => console.log(`${prop}: ${o[prop]}`));

// 방법 2
Object.keys(o)
    .filter(prop => prop.startsWith('x'))
    .forEach(prop => console.log(`${prop}: ${o[prop]}`));

// xochitl: 2
// xylophone: 5