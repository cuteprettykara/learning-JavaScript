// 제이쿼리 함수($나 jQuery)로 DOM 요소 셋을 감싼 것을 [제이쿼리 객체]라고 부릅니다.
$(document).ready(function() {
    const $paras = $('p');
    console.log($paras.length);
    console.log(typeof $paras);             // "object"
    console.log($paras instanceof $);       // "true"
    console.log($paras instanceof jQuery);   // "true"

});

