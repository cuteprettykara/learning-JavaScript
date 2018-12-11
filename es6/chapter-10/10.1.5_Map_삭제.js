const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };

const userRoels = new Map();

// 사용자 역할을 할당합니다.
userRoels.set(u1, 'User');
userRoels.set(u2, 'User');
userRoels.set(u3, 'Admin');

// 맵의 요소를 지울 때는 delete() 메소드를 사용합니다.
console.log(userRoels.size);
userRoels.delete(u2);
console.log(userRoels.size);

console.log('******************');

// 맵의 요소를 모두 지울 때는 clear() 메소드를 사용합니다.
userRoels.clear();
console.log(userRoels.size);