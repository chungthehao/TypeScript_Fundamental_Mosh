var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
// When defining an object of a custom type, need to explicitly allocate memory to it --> initialize it using a new operator
var point = new Point();
point.x = 1;
point.y = -2;
point.draw();
