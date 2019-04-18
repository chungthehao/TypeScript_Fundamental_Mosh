
// let drawPoint = (point) => {
//     //...
// }

// Solution 1: Inline annotation
// let drawPoint = (point: { x: number, y: number }) => {
//     //...
// }

// Defining a shape of an object
interface Point {
    x: number
    y: number
}
// Solution 2: Use interface
let drawPoint = (point: Point) => {
    //...
}

drawPoint({ x: 1, y: 2 })

// Lo nhu truyen obj ko dung thi sao --> lam sao de rang buoc truyen DUNG object
drawPoint({ name: 'John', age: 27 })