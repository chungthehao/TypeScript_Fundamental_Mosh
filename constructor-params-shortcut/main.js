var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        if (value < 0)
            throw new Error('x cannot be less than 0!');
        this.x = value;
    };
    return Point;
}());
// When defining an object of a custom type, need to explicitly allocate memory to it --> initialize it using a new operator
var point = new Point(1, -2);
var x = point.getX();
point.setX(3);
point.draw();
