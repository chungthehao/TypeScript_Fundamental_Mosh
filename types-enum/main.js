// Luc bien dich bao loi, nhung tsc van tien hanh bien dich binh thuong
// let a = 10 // Mac dinh hieu kieu la number
// a = 'Hi'
// Ko khoi tao gia tri --> mac dinh kieu any
// let b
// b = true
// b = []
// b = -23
var a;
var b;
var c;
var d = [1, -3, 9];
var f = [true, 100, 'Hello', {}];
// JS khi muon khai bao cac hang so, thi cu khai bao binh thuong, ko co cach gi dac biet
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
// Trong TypeScript dung enum de chua nhung hang so co lien quan den nhau lai
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Green;
