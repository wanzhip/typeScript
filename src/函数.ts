//ts中函数参数正常书写类型  和js一样分为具名和匿名
// function buildName(firstName: string, lastName: string) {
//   return firstName + " " + lastName;
// }


//使用 ?实现可选参数的功能    (可选参数)必须跟在(必须参数)后面

// function buildName(firstName: string, lastName?: string) {
//   if (lastName)
//       return firstName + " " + lastName;
//   else
//       return firstName;
// }


/**
 *  默认初始化值参数 放在必须参数前后都可 
 * 如果放在前面 用户必须明确的传入undefined值来获得默认值
 * @param firstName 
 * @param lastName 
 */
function buildName(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}


/**
 *函数兼容  
 右边赋值给左边  
 右->左 （参数）1对多的关系（子集关系）
 注：参数名字无所谓，主要是参数类型
 
 */
// let x = (a: number) => 0;
// let y = (b: number, s: string) => 0;

// y = x; // OK


/**
 * 函数重载  同一个函数由于函数签名（传递的参数）（不同的控制流程）不同会有不同的表现形式（绑定到不同的重载函数）
 *本质共享一个函数体
 *
 * */
