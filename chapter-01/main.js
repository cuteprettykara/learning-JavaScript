$(document).ready(function() {
    'use strict';

    // 준비작업 : template(= boilerplate)
    paper.install(window);                              // paper.js를 전역 스코프에 설치
    paper.setup(document.getElementById('mainCanvas')); // paper.js를 canvas에 연결

    /******************/
    /* 원 1개만 그리기 */
    /******************/
    // var c = Shape.Circle(200, 200, 50);
    // c.fillColor = 'green';



    /*****************/
    /* 원 64개 그리기 */
    /*****************/
    // var c;
    // for (var x=25; x<400; x+=50) {
    //     for (var y=25; y<400; y+=50) {
    //         c = Shape.Circle(x, y, 20);
    //         c.fillColor = 'green';
    //     }
    // }



    /**********************/
    /* 사용자 입력 처리하기 */
    /**********************/
    
    // 방법1
    // var tool = new Tool();
    // tool.onMouseDown = function(event) {
    //     var c = Shape.Circle(event.point.x, event.point.y, 20);
    //     c.fillColor = 'green';
    // }; 

    // 방법2
    // var tool = new Tool();
    // tool.onMouseDown = function(event) {
    //     var c = Shape.Circle(event.point, 20);
    //     c.fillColor = 'green';
    // };



    /***********************/
    /* hello World 추가하기 */
    /***********************/
    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';

    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello World';



    paper.view.draw();
});