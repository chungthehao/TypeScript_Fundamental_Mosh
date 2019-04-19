import { Point } from './point'

// When defining an object of a custom type, need to explicitly allocate memory to it --> initialize it using a new operator
let point = new Point(1, -2)

point.draw()