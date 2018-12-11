const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };

const userRoels = new Map();

// 사용자 역할을 할당합니다.
userRoels.set(u1, 'User');
userRoels.set(u2, 'User');
userRoels.set(u3, 'Admin');

// 맵도 구조분해 할 수 있습니다.
// 분해하면 좀 더 자연스러운 코드가 됩니다.
for (const [u, r] of userRoels.entries())
    console.log(`${u.name}: ${r}`);

console.log('******************');

// entries() 메소드는 맵의 기본 이터레이터입니다.
// 위 코드는 다음과 같이 단축해서 쓸 수 있습니다.
for (const [u, r] of userRoels)
    console.log(`${u.name}: ${r}`);

// 이터러블 객체보다 [배열이 더 필요하다면] 확산 연산자(spread operator)를 쓰면 됩니다.
console.log('******************');

console.log([...userRoels.values()]);