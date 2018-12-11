// ES6 이전에는 키와 값을 연결하려면 객체를 사용해야 했습니다.
// 하지만 객체를 이런 목적으로 사용하면 여러 가지 단점이 생깁니다.

// 1. 프로토타입 체인 때문에 의도하지 않은 연결이 생길 수 있습니다.
// 2. 객체 안에 연결된 키와 값이 [몇 개나 되는지] 쉽게 알아낼 수 있는 방법이 없습니다.
// 3. 키는 반드시 문자열이나 심볼이어야 하므로, [객체를 키로] 써서 값과 연결할 수 없습니다.
// 4. 객체는 프로퍼티 순서를 전혀 보장하지 않습니다.

// Map은 이런 결함을 모두 해결했고, 
// 키와 값을 연결할 목적이라면 (문자열만 키로 쓴다 해도) 객체보다 나은 선택입니다.

// 예를 들어 사용자 객체가 여럿 있고, 이들에게 각각 역할을 부여한다고 합시다.

const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };

// 방법 1: set() 메소드를 써서 사용자 역할을 할당합니다.
// const userRoels = new Map();
// userRoels.set(u1, 'User');
// userRoels.set(u2, 'User');
// userRoels.set(u3, 'Admin');
// 애석하지만 제임스에게는 역할이 없습니다.


// 방법 2: set()메소드는 체인으로 연결할 수 있어서 타이핑하는 수고를 덜어줍니다.
// const userRoels = new Map();
// userRoels
//     .set(u1, 'User')
//     .set(u2, 'User')
//     .set(u3, 'Admin');


// 방법 3: 생성자에 [배열의 배열]을 넘기는 형태로 써도 됩니다.
const userRoels = new Map([
    [u1, 'User'],
    [u2, 'User'],
    [u3, 'Admin'],
]);
console.log(userRoels);