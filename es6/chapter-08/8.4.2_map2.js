// 두 배열에 상품과 가격이 따로 저장되어 있는데, 이 둘을 객체로 결합해 봅시다.
// 여기서 우리는 요소 자체(x)만 사용하지 않고, 인덱스(i)도 사용했습니다.
// 인덱스를 쓴 까닭은 items의 요소와 prices의 요소를 인덱스에 따라 결합하기 위해서입니다.
// 객체를 괄호로 감싼 이유는, 이렇게 하지 않으면 화살표 표기법에서 [객체 리터럴의 중괄호를] [블록으로 판단]하기 때문입니다.
const items = ["Widget", "Gadget"];
const prices = [9.95, 22.95];

const cart = items.map((x, i) => ( {name: x, price: prices[i]} ));
console.log(cart);