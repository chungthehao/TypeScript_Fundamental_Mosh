
class Point {
    private x: number
    private y: number

    constructor(x?: number, y?: number) {
        this.x = x
        this.y = y
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
}

// When defining an object of a custom type, need to explicitly allocate memory to it --> initialize it using a new operator
let point = new Point(1, -2)
// point.x = 66
// point.y = 99

point.draw()