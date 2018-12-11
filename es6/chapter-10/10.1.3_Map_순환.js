const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };

const userRoels = new Map();

// 사용자 역할을 할당합니다.
userRoels.set(u1, 'User');
userRoels.set(u2, 'User');
userRoels.set(u3, 'Admin');

// keys() 메소드는 맵의 키를,
// values() 메소드는 값을,
// entries() 메소드는 첫 번째 요소가 키이고, 두 번째 요소가 값인 [배열]을 
// 각각 반환합니다.

// 이들 메소드가 반환하는 것은 모두 [이터러블 객체]이므로 for..of 루프를 쓸 수 있습니다.
console.log(userRoels.keys());      // { { name: 'Cynthia' }, { name: 'Jackson' }, { name: 'Olive' } }
for (const u of userRoels.keys())
    console.log(u.name);

console.log('******************');

console.log(userRoels.values());    // { 'User', 'User', 'Admin' }
for (const r of userRoels.values())
    console.log(r);

console.log('******************');

console.log(userRoels.entries());
// {
//     [ { name: 'Cynthia' }, 'User' ],
//     [ { name: 'Jackson' }, 'User' ],
//     [ { name: 'Olive' }, 'Admin' ] 
// }

for (const ur of userRoels.entries())
    console.log(`${ur[0].name}: ${ur[1]}`);