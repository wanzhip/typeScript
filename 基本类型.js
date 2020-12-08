/**元组
 * 已知元素（数量）和（类型）的数组
 *
*/
// let x: [string, number];
// x = ['hello', 10];
// 当访问一个越界的元素，会使用联合类型替代
// x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
// console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
// x[6] = true; // Error, 布尔不是(string | number)类型
// 枚举
/**
 * enum类型是对JavaScript标准数据类型的一个补充。
 * 像C#等其它语言一样，使用枚举类型可以为（一组数值）赋予友好的名字。
 *
 */
// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;
// 枚举默认从0开始  枚举会进行反编译
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
console.log(Color[1]);
