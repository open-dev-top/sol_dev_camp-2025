"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name1 = "Hi";
var num = 1;
var bool = false;
console.log(name1, num, bool);
// 数组 js 有
// 元组和枚举 js 没有，ts 兼容 js，是超集，所以新的数据类型是原先模拟出来的
var arr1 = ["1", "2", "3"];
var arr2 = ["1", "2"];
var tuple = ["1", 1];
tuple[2] = "2";
console.log(tuple);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
var color = Color.Red;
console.log(color);
