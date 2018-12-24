// 배열 안에 함수를 쓰는 패턴은 특정 상황에서는 대단히 유용합니다.
// 자주 하는 일을 한 셋으로 묶는 [파이프라인]이 좋은 예입니다.
// 배열을 사용하면 작업 단계를 언제든 쉽게 바꿀 수 있다는 장점이 있습니다.
// 어떤 작업을 빼야 한다면 배열에서 제거하기만 하면 되고, 
// 추가할 작업이 있다면 배열에 추가하기만 하면 됩니다.

// 그래픽 변형(transformation)을 예로 들어 봅시다.
// 시각화 소프트웨어를 만들 때는 변형을 파이프라인으로 묶어서 적용할 때가 많습니다.
// 다음은 자주 사용하는 2차원 변형의 한 예입니다.
const sin = Math.sin;
const cos = Math.cos;
const theta = Math.PI/4;
const zoom = 2;
const offset = [1, -3];

const pipeline = [
    function rotate(p) {
        return {
            x: p.x * cos(theta) - p.y * sin(theta),
            y: p.x * sin(theta) + p.y * cos(theta),
        };
    },
    function scale(p) {
        return { x: p.x * zoom, y: p.y * zoom };
    },
    function translate(p) {
        return { x: p.x + offset[0], y: p.y + offset[1] };
    }
];

// 이제 pipeline은 2D 변형에 필요한 함수의 배열입니다.
// 점 하나를 변형해 봅시다.
const p = { x: 1, y: 1 };
let p2 = p;
for (let i = 0; i < pipeline.length; i++) {
    p2 = pipeline[i](p2);
}

// p2는 이제 p1을 좌표 원점 기준으로 45도 회전하고(rotate),
// 원점에서 2 단위만큼 떨어뜨린 후(scale),
// 1단위 오른쪽, 3단위 아래쪽으로 움직인(translate) 점입니다.


// 각 함수에 점(point)을 전달하고, 반환값을 다시 그 점에 할당합니다.
// 이런 식으로 그 점에 파이프라인의 각 단계가 모두 적용됩니다.

// 파이프라인은 그래픽 애플리케이션에만 쓰이는 건 아닙니다.
// [일정한 순서에 따라 함수를 실행해야 한다면] 파이프라인을 써서 효율적으로 일할 수 있습니다.