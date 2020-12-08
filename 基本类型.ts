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

// enum Color{Red, Green, Blue}

// let c:Color = Color.Green;
// console.log(c);
// console.log(Color[1]);


//never 类型  表示永不存在的值的类型 比如函数throw error  死循环
// 返回never的函数必须存在无法达到的终点
// function error(message: string): never {
//   throw new Error(message);
// }

// // 推断的返回值类型为never
// function fail() {
//   return error("Something failed");
// }

// // 返回never的函数必须存在无法达到的终点
// function infiniteLoop(): never {
//   while (true) {
//   }
// }



//object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。


//某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
// function warnUser(): void {
//   console.log("This is my warning message");
// }


//类型断言
//尖括号语法
// let someValue: any = "this is a string";

// let strLength: number = (<string>someValue).length;

//as语法
// let someValue: any = "this is a string";

// let strLength: number = (someValue as string).length;