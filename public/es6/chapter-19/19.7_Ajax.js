// 제이쿼리에는 Ajax호출을 간편하면서도 세밀히 컨트롤할 수 있는 메소드가 있습니다.
// 가장 널리 쓰이는 Ajax 호출을 간편하게 바꾼 get과 post 메소드도 있습니다.
// 이들 메소드는 콜백을 지원하기도 하지만, 
// 서버 응답을 처리할 때 권장하는 방법인 프라미스를 반환하기도 합니다.
// 예를 들어 앞 장에서 만들었던 refreshServerInfo 예제를 다음과 같이 get으로 고쳐 쓸 수 있습니다.
function refreshServerInfo() {
    const $serverInfo = $('.serverInfo');
    $.get('http://localhost:7070').then(
        // 성공한 경우
        function(data) {
            Object.keys(data).forEach(p => {
                $(`[ data-replace="${p}"]`).text(data[p]);
            });
        },
        function(jqXHR, textStatus, err) {
            console.log(err);
            $serverInfo.addClass('error')
                .html('Error connection to server');
        }
    );
}

$(document).ready(function() {
    setInterval(refreshServerInfo, 1000);
});

// 보시다시피 제이쿼리를 써서 Ajax 코드를 꽤 많이 단순화할 수 있습니다.