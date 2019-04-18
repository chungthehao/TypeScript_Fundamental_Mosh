// Luc bien dich bao loi, nhung tsc van tien hanh bien dich binh thuong
// let a = 10 // Mac dinh hieu kieu la number
// a = 'Hi'

// Ko khoi tao gia tri --> mac dinh kieu any
// let b
// b = true
// b = []
// b = -23

let a: number
let b: boolean
let c: string
let d: number[] = [1, -3, 9]
let f: any[] = [true, 100, 'Hello', {}]

// JS khi muon khai bao cac hang so, thi cu khai bao binh thuong, ko co cach gi dac biet
const colorRed = 0
const colorGreen = 1
const colorBlue = 2

// Trong TypeScript dung enum de chua nhung hang so co lien quan den nhau lai
enum Color { Red = 0, Green = 1, Blue = 2 }
let backgroundColor = Color.Green