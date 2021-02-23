function sayHello(person: string) {
  return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));

/**
 * any类型不做限制
 * 联合类型 声明多个类型 string | number  被声明为联合类型只能访问共有属性
 * 不声明默认any
 * 接口  对对象内有的东西进行描述，对类进行抽象
 */

interface Person {
  readonly id: number;//只读属性
  name: string,
  age: number,
  address?: string//可选属性
  [propName: string]: string | number;//允许任意属性，前提是其他属性的公共集合
  // [propName: string]: any; 
}

// 变量形状必须和接口形状一致
let tom: Person = {
  id: 1,//不可更改
  name: 'tom',
  age: 12
}

/**
 * 不同类之间可能有相同的共性，提取成接口
 * 车和防盗门都可以报警
 */

interface Alarm {
  alert(): void;
}
// 接口继承接口！！！！
interface LightableAlarm extends Alarm {
  lightOn(): void;
  lightOff(): void;
}
interface Light {
  lightOn(): void;
  lightOff(): void;
}
class Door {
}
//防盗门继承自门实现alarm接口
class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('SecurityDoor alert');
  }
}
//车实现alarm接口   类继承类实现接口！！！！
// class Car implements Alarm, Light  { 或
class Car implements LightableAlarm {
  alert() {
    console.log('Car alert');
  };
  lightOn() {
    console.log('Car light on');
  };
  lightOff() {
    console.log('Car light off');
  };
}

/***
 * 接口继承类！！！！ 可以改为接口继承接口
 */
class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };

/**
 * 泛型  不先指定类型，在使用的时候在指定类型
 * 数组类型  <elemType>[]
 * 数组泛型  Array<elemType>
 */

let anumber: number[] = [1, 2]
let bnumber: Array<number> = [1, 2]
let anynumber: Array<any> = [1, '2']


/**
 * 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：
 * 泛型约束
 */

interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// 元组
/**
 * 元组类型允许表示一个已知元素数量和类型的【数组】  当访问越界索引值时使用联合类型推断
 * 可理解为any类型的数组
 */
let aAuple:[string,number] = ['1',2]


/**
 * class类   
 * static  生命static的类方法只能被类自身调用
 * 访问修饰符 public private protected
 * 默认所有属性和方法都是public,=在任何地方都可以访问
 * private 属性或方法只能在类内部使用不能在外部或子类中访问
 * protected 和private类似，区别是可以在子类中访问
 * 和readonly同用时 写在readonly前
 */


 /**
  * 抽象类只能被继承不能被实例化  抽象类中的抽象方法要在子类中实现  就像类实现接口要实现接口的方法
  * 
  */
