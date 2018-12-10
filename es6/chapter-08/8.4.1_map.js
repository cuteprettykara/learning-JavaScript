// 일정한 형식의 배열을 다른 형식으로 바꿔야 한다면, map을 쓰십시오.
// map과 filter는 모두 사본을 반환하며, 원래 배열은 바뀌지 않습니다.

const cart = [
    {name: "Widget", price: 9.95},
    {name: "Gadget", price: 22.95}
];

const names = cart.map(x => x.name);
console.log(names);         // ["Widget", "Gadget"]

const prices = cart.map(x => x.price);
console.log(prices);        // [9.95, 22.95]

const discoutPrices = prices.map(x => x*0.8);
console.log(discoutPrices); // [7.96, 18.36]