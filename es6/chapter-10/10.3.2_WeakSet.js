// WeakSet은 객체만 포함할 수 있으며, 
// 이 객체들은 가비지 컬렉션의 대상이 됩니다.
// WeakMap과 마찬가지로 WeakSet도 이터러블이 아니므로, WeakSet의 용도는 매우 적습니다.
// WeakSet의 실제 용도는 [주어진 객체가] Set안에 [존재하는지 아닌지를 알아보는 것 뿐]이라고 해도 과언이 아닙니다.

// 예를 들어 산타클로스가 naughty라는 WeakSet을 가지고,
// 어떤 아이가 우는 아이인지 확인해서 선물 대신 석탄을 놓고 온다고 합시다.

const naughty = new WeakSet();

const children = [
    { name: "Suzy" },
    { name: "Derek" }
];

naughty.add(children[1]);

for (const child of children) {
    if (naughty.has(child)) {
        console.log(`Coal for ${child.name}`);
    } else {
        console.log(`Presents for ${child.name}`);
    }
}