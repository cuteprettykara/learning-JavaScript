// Set은 중복을 허용하지 않는 데이터 집합입니다.
// 이전 예제를 재활용합시다.
// 그런데 이번에는 한 사용자에게 여러 역할을 할당하고 싶다고 합시다.
// 같은 사용자에게 같은 역할을 여러 번 부여한다는 것은 상식적이지 않습니다.
// Set은 이런 경우에 이상적인 데이터 구조입니다.
const roles = new Set();

// 사용자 역할을 추가할 때는 add() 메소드를 사용합니다.
console.log(roles.add("User")); // Set { 'User' }

// 이 사용자에게 관리자 역할을 추가하려면 add()를 다시 호출합니다.
console.log(roles.add("Admin")); // Set { 'User', 'Admin' }

// Map과 마찬가지로 Set에도 size 프로퍼티가 있습니다.
console.log(roles.size);        // 2

console.log('*************************');

// Set의 장점은 아주 단순합니다. 추가하려는 것이 Set에 이미 있는지 확인할 필요가 없습니다.
// 이미 있다면 아무 일도 일어나지 않습니다.
console.log(roles.add("User")); // Set { 'User', 'Admin' }
console.log(roles.size);        // 2

console.log('*************************');

// 역할을 제거할 때는 delete()를 호출합니다.
// 제거에 성공했다면, 즉 그런 역할이 Set에 존재했다면 true를 반환하고,
// 그렇지 않다면, false를 반환합니다.
console.log(roles.delete("Admin"));  // true
console.log(roles);                  // Set { 'User' }
console.log(roles.delete("Admin"));  // false