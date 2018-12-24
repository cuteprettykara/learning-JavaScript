// 이 문제를 해결하려면 이 함수를 어떻게 사용할 것인지 주의 깊게 생각해야 합니다.
// 아마 이 함수는 반복적으로 호출할 겁니다.
// 예를 들어, 브라우저에서 어떤 요소의 색깔을 0.5초마다 바꾸고 싶다면 다음과 같을 것입니다.
setInterval(function () {
    document.querySelector('.rainbow')
        .style['background-color'] = getNextRainbowColor();
}, 500);

// 문제는, 만약 프로그램의 다른 부분에서 getNextRainbowColor()를 호출한다면
// 이 코드도 영향을 받는다는 겁니다.
// 여기서는 이터레이터를 사용하는 것이 더 나은 방법입니다.
function getRainbowIterator() {
    const colors = [
        'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
    ];

    let colorIndex = -1;
    
    return {
        next() {
            if (++colorIndex >= colors.length) colorIndex = 0;
            return {value: colors[colorIndex], done: false};
        }
    }
};

const rainbowIterator = getRainbowIterator();
setInterval(function () {
    document.querySelector('.rainbow')
        .style['background-color'] = rainbowIterator.next().value;
}, 500);

// 이제 getRainbowIterator는 순수 함수입니다.
// 이 함수는 항상 같은 것(이터레이터)을 반환하며, 외부에 아무 영향도 주지 않습니다.

// 결국 next() 메소드는 매번 다른 값을 반환할테니, 문제를 뒤로 미뤘을 뿐 아니냐고 생각할 수도 있습니다.
// 틀린 말은 아니지만, next()는 함수가 아니라 메소드라는 점에 주목할 필요가 있습니다.
// 메소드는 자신이 속한 객체의 컨텍스트 안에서 동작하므로, 메소드의 동작은 그 객체에 의해 좌우됩니다.

// 프로그램의 다른 부분에서 getRainbowIterator를 호출하더라도,
// 독립적인 이터레이터가 생성되므로 다른 이터레이터를 간섭하지 않습니다.