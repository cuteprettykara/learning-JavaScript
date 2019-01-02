// setter 없이 getter만 만들수도 있습니다.
// 예를 들어 사각형의 둘레(perimeter)를 얻는 getter는 다음과 같이 만들겁니다.
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get perimeter() {
        return this.width * 2 + this.height * 2;
    }
}

// 사각형이 만들어질 때 이미 너비와 높이는 결정되므로, 둘레는 읽기 전용 프로퍼티로
// 생각하는 것이 상식적입니다.