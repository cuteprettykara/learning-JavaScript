const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };

const userRoels = new Map();

// 사용자 역할을 할당합니다.
userRoels.set(u1, 'User');
userRoels.set(u2, 'User');
userRoels.set(u3, 'Admin');
// 애석하지만 제임스에게는 역할이 없습니다.

// u2의 역할을 알아볼 때는 get() 메소드를 쓰면 됩니다.
console.log(userRoels.get(u2));

// 맵에 존재하지 않는 키에 get을 호출하면 undefined를 반환합니다.
// 맵에 키가 존재하는지 확인하는 has() 메소드도 있습니다.
console.log('******************');
console.log(userRoels.has(u1));  // true
console.log(userRoels.get(u1));  // "User"

console.log(userRoels.has(u4));  // false
console.log(userRoels.get(u4));  // undefined

// // 맵에 이미 존재하는 키에 set()을 호출하면 값이 교체됩니다.
console.log('******************');
console.log(userRoels.get(u1)); // "User"
userRoels.set(u1, 'Admin');
console.log(userRoels.get(u1)); // "Admin"

// // size 프로퍼티는 맵의 요소 숫자를 반환합니다.
console.log('******************');
console.log(userRoels.size);    // 3