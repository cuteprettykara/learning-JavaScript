// 블록문(block statement) = 복합문(compound statement)
// 문(statement) 여러 개를 중괄호로 묶은 것.
// 블록문이 유용해지는 것은 제어문과 함께 쓸 때입니다.

// 같은 if문 안에서 블록문과 블록 없는 문을 섞어 쓰지 마십시오.
if (funds > 1) {
    console.log("There's money left");
    console.log("That means keep playing!");
} else 
    console.log("I'm broken! Time to quit.");