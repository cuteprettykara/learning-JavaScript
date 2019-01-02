// 제이쿼리에는 text와 html 메소드가 있습니다.
// 이들은 각각 요소의 textContent, innerHTML 프로퍼티에 대응합니다.
$(document).ready(function() {
//    $('p').text('ALL PARAGRAPHS REPLACED');
//    $('p').html('<i>ALL</i> PARAGRAPHS REPLACED')
});

// 이 예제는 아주 단순하지만 제이쿼리의 중요한 특징을 잘 보여줍니다.
// 제이쿼리는 아주 쉽게 여러 요소를 동시에 수정할 수 있습니다.
// DOM API로 같은 일을 하려면 document.querySelectorAll()이 반환하는 컬렉션을 순회하면서 작업해야 합니다.
// 제이쿼리는 기본적으로 제이쿼리 객체에 들어있는 모든 요소에 같은 작업을 반복하면서 루프 실행을 대신해 줍니다.

// 그런데 세 번째 문단 하나만 바꾸려면 어떻게 해야 할까요?
// eq 메소드를 써서 요소 하나만 들어있는새 제이쿼리 객체를 만들면 됩니다.
$(document).ready(function() {
    // $('p')          // 모든 문단에 일치합니다.
    //     .eq(2)      // 세 번째 문단(인덱스는 0으로 시작합니다)
    //     .html('<i>THIRD</i> PARAGRAPHS REPLACED');
 });

 // 요소를 제거할 때는 제이쿼리 객체에서 remove를 호출합니다.
 // 모든 문단을 제거하려면 다음과 같이 합니다.
 $(document).ready(function() {
    // $('p').remove();
 });

 // 제이쿼리에는 새 콘텐츠를 추가하는 메소드도 여러 가지가 있습니다.
 // 먼저 append 메소드를 봅시다.
 // 예를 들어 모든 문단에 각주 표시를 붙이고 싶다면 다음과 같이 간단하게 할 수 있습니다.
 $(document).ready(function() {
    // $('p').append('<sup>*</sup>');
 });

 // append는 일치하는 요소에 [자식]을 추가합니다.

 // [형제]를 삽입할 때는 before나 after를 사용합니다.
 // 다음은 모든 문단 앞 뒤에 <hr>요소를 추가하는 코드입니다.
 $(document).ready(function() {
    // $('p')
    // .after('<hr>')
    // .before('<hr>');
 });

 // 이들 삽입 메소드는 삽입할 '자리'에서 호출하지만,
 // 반대로 삽입할 '요소'에서 호출하는 appendTo, insertBefore, insertAfter 메소드도 있습니다.
 // 이들을 쓰는 게 알맞은 상황도 있습니다. 다음 예제를 보십시오.
 $(document).ready(function() {
    // $('<sup>*</sup>').appendTo('p');    // $('p').append('<sup>*</sup>')와 같습니다.
    // $('<hr>').insertBefore('p');        // $('p').before('<hr>')와 같습니다.
    // $('<hr>').insertAfter('p');         // $('p').after('<hr>')와 같습니다.
 });

 // 제이쿼리에서는 요소의 스타일도 쉽게 바꿀 수 있습니다.
 // 홀수 번째 문단을 모두 빨간색으로 바꾸려면 다음고 같이 합니다.
 $(document).ready(function() {
    //  $('p:odd').css('color', 'red');
 });

// 제이쿼리 체인을 사용하다 보면 이따금 이미 선택한 요소의 부분집합만 남겨야 할 때가 있습니다.
// 제이쿼리 객체를 요소 하나로 줄이는 eq는 이미 봤지만, 그 외에도 filter, not, fin를 써서 
// 선택범위를 줄일 수 있습니다.

// filter는 셋 요소 일치 선택자에 맞는 요소만 남도록 선택 범위를 줄입니다.
// 예를 들어 문단 전체를 수정한 다음, filter를 체인으로 연결해 홀수 번째 문단만 빨갛게 바꿀 수 있습니다.
$(document).ready(function() {
    // $('p')
    //     .after('<hr>')
    //     .append('<sup>*</sup')
    //     .filter(':odd')
    //     .css('color', 'red');
});

// not은 filter의 반대입니다.
// 모든 문단 다음에 <hr>을 붙이고, highlight 클래스가 없는 문단을 모두 들여 쓰려면 다음과 같이 합니다.
$(document).ready(function() {
    // $('p')
        // .after('<hr>')
        // .not('.highlight')
        // .css('margin-left', '20px');
});

// 마지막으로 find는 주어진 선택자에 일치하는 자손만 남깁니다.
// 예를 들어 모든 문단 앞에 <hr>을 붙인 다음, 클래스가 code인 자손 요소의 폰트 크기를 키워려면 다음곽 같이 합니다.
$(document).ready(function() {
    $('p')
        .before('<hr>')
        .find('.code')
        .css('font-size', '30px');
});
