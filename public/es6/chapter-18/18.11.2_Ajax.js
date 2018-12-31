function refreshServerInfo() {
    const req = new XMLHttpRequest();
    
    req.addEventListener('load', function() {
        // this.responseText는 JSON이 들어있는 문자열입니다.
        // JSON.parse를 써서 문자열을 객체로 바꿉니다.
        const data = JSON.parse(this.responseText);

        // 클래스가 serverInfo인 <div>의 텍스트만 교체합니다.
        const serverInfo = document.querySelector('.serverInfo');

        Object.keys(data).forEach(p => {
            // 텍스트를 교체할 요소를 찾습니다.
            const replacements = serverInfo.querySelectorAll(`[ data-replace="${p}"]`);

            // 서버에서 받은 값으로 텍스트를 교체합니다.
            for (const r of replacements) {
                r.textContent = data[p];
            }
        });
    });

    req.open('GET', 'http://localhost:7070', true);
    req.send();
}

setInterval(refreshServerInfo, 1000);