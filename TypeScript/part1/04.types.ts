// object 表示一个 js 对象
let a: object;
a = {};
a = function () {};

// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名:属性值,属性名:属性值}
// 在属性名后边加上 ?，表示属性是可选的
let b: { name: string; age?: number };
b = {
  name: '孙悟空',
  age: 18
};

// [propName: string]: any 表示可以有任意类型的属性
let c: { name: string; [propName: string]: any };
c = { name: '猪八戒', age: 18, gender: 'male' };

/*
设置函数结构的类型声明
  语法：(形参:类型,形参:类型...)=> 返回值 
 */
let d: (a: number, b: number) => number;
d = function (n1, n2) {
  return n1 + n2;
};

// string[] 表示字符串数组
let e: string[];
e = ['a', 'b', 'c'];

// number[] 表示数值数组
let f: number[];

let g: Array<number>;
g = [1, 2, 3];

/* 
元组，就是固定长度的数组
  语法：[类型,类型]
*/
let h: [string, number];
h = ['hello', 123];

/*  
enum 枚举
*/
// 默认从 0 开头
enum Genders {
  Male,
  Females
}
let i: { name: string; gender: Genders };
i = {
  name: '孙悟空',
  gender: Genders.Male // 'male'
};

console.log(i.gender === Genders.Male);

// & 表示同时
let j: { name: string } & { age: number };
j = {
  name: '孙悟空',
  age: 18
};

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: 1 | 2 | 3 | 4 | 5;
let l: 1 | 2 | 3 | 4 | 5;
let m: myType;
k = 5;
m = 4;
