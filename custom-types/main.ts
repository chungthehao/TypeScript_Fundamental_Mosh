
// let drawPoint = (point) => {
//     //...
// }

// Solution 1: Inline annotation
// let drawPoint = (point: { x: number, y: number }) => {
//     //...
// }

// Defining a shape of an object
// interface Point {
//     x: number,
//     y: number,
//     draw: () => void
// }

class Point {
    x: number
    y: number

    // ko cần truyền point vô nữa vì nó đang là cùng 1 class, có thể truy xuất được giá trị của nó
    draw() {
        // ...
    }

    getDistance(another: Point) {
        // ...
    }
}

// Solution 2: Use interface
let drawPoint = (point: Point) => {
    // ...
}

// Các method được xây dựng rời rạc ko tập trung vào 1 chỗ --> class
let getDistance = (pointA: Point, pointB: Point) => {
    // ...
}

drawPoint({ x: 1, y: 2 })

// Lo nhu truyen obj ko dung thi sao --> lam sao de rang buoc truyen DUNG object
drawPoint({ name: 'John', age: 27 })