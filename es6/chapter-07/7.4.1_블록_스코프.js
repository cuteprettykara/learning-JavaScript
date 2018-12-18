// let과 const는 식별자를 블록 스코프에서 선언합니다.
// 블록 스코프는 그 블록의 스코프에서만 보이는 식별자를 의미합니다.
console.log(`before block`);
{
    console.log(`inside block`);
    const x = 3;
    console.log(x);     // 3
}
console.log(`outside block; x = ${x}`); // ReferenceError: x is not defined