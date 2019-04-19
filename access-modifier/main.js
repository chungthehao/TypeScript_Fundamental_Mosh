var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
// When defining an object of a custom type, need to explicitly allocate memory to it --> initialize it using a new operator
var point = new Point(1, -2);
// point.x = 66
// point.y = 99
point.draw();
