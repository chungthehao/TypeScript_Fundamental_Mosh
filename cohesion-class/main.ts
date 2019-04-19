
class Point {
    x: number
    y: number

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }

    getDistance(another: Point) {
        // ...
    }
}

// When defining an object of a custom type, need to explicitly allocate memory to it --> initialize it using a new operator
let point = new Point()
point.x = 1
point.y = -2
point.draw()