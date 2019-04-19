
class Point {

    constructor(private x?: number, private y?: number) {

    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }

    getX() {
        return this.x
    }

    setX(value: number) {
        if (value < 0)
            throw new Error('x cannot be less than 0!')

        this.x = value
    }
}

// When defining an object of a custom type, need to explicitly allocate memory to it --> initialize it using a new operator
let point = new Point(1, -2)
let x = point.getX()
point.setX(3)

point.draw()