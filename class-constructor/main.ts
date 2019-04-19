
class Point {
    x: number
    y: number

    constructor(x?: number, y?: number) {
        this.x = x
        this.y = y
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
}

// When defining an object of a custom type, need to explicitly allocate memory to it --> initialize it using a new operator
let point = new Point()

point.draw()