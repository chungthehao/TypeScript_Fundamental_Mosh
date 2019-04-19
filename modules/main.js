"use strict";
exports.__esModule = true;
var point_1 = require("./point");
// When defining an object of a custom type, need to explicitly allocate memory to it --> initialize it using a new operator
var point = new point_1.Point(1, -2);
point.draw();
