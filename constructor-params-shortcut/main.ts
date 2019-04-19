
class Point {

    constructor(private x?: number, private y?: number) {

    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
}

// When defining an object of a custom type, need to explicitly allocate memory to it --> initialize it using a new operator
let point = new Point(1, -2)

point.draw()