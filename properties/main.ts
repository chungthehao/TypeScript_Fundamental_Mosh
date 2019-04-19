
class Point {

    constructor(private _x?: number, private _y?: number) {

    }

    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y)
    }

    get x() {
        return this._x
    }

    set x(value: number) {
        if (value < 0)
            throw new Error('_x cannot be less than 0!')

        this._x = value
    }
}

// When defining an object of a custom type, need to explicitly allocate memory to it --> initialize it using a new operator
let point = new Point(1, -2)
let x = point.x
point.x = 8

point.draw()