// 声明一个变量a, 同时指定他的类型为 Number
let a: number;

// a 的类型设置为了 number，在以后的使用过程中 a 的值只能是 number

a = 10;
a = 22;
// a = 'hello'; // 代码会报错，因为变量 a 的类型是 number，不能赋值 string

let b: string;

b = 'heelo';

// let c: boolean = false;

// 如果变量的声明和赋值是同时进行的， TS 可以自动对变量进行类型检测
let c = true;
c = false;

// JS 中的函数是不考虑参数的类型和个数的
function sum(a: number, b: number): number {
  return a + b;
}

let result = sum(123, 213123);
