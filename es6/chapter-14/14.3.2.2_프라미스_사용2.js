// 프라미스는 catch 핸들러도 지원하므로 핸들러를 둘로 나눠서 써도 됩니다.
function countdown(seconds) {
    return new Promise(function(resolve, reject) {
        for (let i = seconds; i>=0; i--) {
            setTimeout(function () {
                if (i>0) 
                    console.log(i + '...');
                else 
                    resolve(console.log('GO!'));
            }, (seconds-i)*1000);
        }
    });
}

const p = countdown(5);

p.then(function() {
        console.log("countdown completed successfully");
});

p.catch(function(err) {
    console.log("countdown experienced an error: " + err.message);
});