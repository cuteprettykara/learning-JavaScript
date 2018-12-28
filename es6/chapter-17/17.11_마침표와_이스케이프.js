// 정규식에서 마침표는 [줄바꿈 문자를 제외한] [모든] 문자에 일치하는 [특수 문자]입니다.
// 이 메타문자는 입력이 어떤 문자이든 상관하지 않고 소비하려 할 때 주로 사용합니다.
// 문자열에서 우편번호만 필요하고 다른 아무것도 필요하지 않다고 칩시다.
const input = "Address:333 Main St., Anywhere, NY, 55332, Phone: 555-555-2525.\n" 
            + "Address:4444 Main St., Anywhere, NY, 66332, Phone: 666-666-3366.";
const match = input.match(/\d{5}.*/g);
console.log(match);     // [ '55332, Phone: 555-555-2525.', '66332, Phone: 666-666-3366.' ]

// 하치만 마침표 자체가 필요할 때도 있습니다.
// 정규식 특수문자를 이스케이프해서 일반 문자로 사용하려면 그 앞에 역슬래시를 붙이면 됩니다.
const equation = "(2 + 3.5) * 7";
const match2 = equation.match(/\(\d \+ \d\.\d\) \* \d/g);
console.log(match2);    // [ '(2 + 3.5) * 7' ]