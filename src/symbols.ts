/**
 * 在es2015中新增了一个原始数据类型 symbols
 * 在用作对象属性时特别有用
 * 说明：
 * js中对象的键一般是string类型，即使是数字也会转为string类型
 */

// const obj:Object = {};
// obj[1] = '123'


let sym = Symbol();

let obj = {
    [sym]: "value"
};

console.log(obj[sym]); // "value"