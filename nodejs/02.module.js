/* 
模块化
在 Node 中，一个 js 文件就是一个模块
  - require() 可以传递一个文件路径作为参数，node 将会主动根据该路径来引入外部模块
  - 这里路径，如果使用相对路径，必须以.或..开头
在 Node 中，每一个 js 文件中的 js 代码都是独立运行在一个函数中，而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问
*/

// console.log('我是一个模块');

// const md = require('./01.hellonode');

// console.log(md.x, md.addition(1, 2));

// 这样导出太麻烦了， 每次都得写 exports
// exports.name = '孙悟空';
// exports.age = 18;
// exports.sayInfo = () => {
//   console.log('我是孙悟空～～～～～');
// };

// 可以这么导出
module.exports = {
  name: '猪八戒',
  age: 16,
  sayName: info => {
    console.log(info);
  }
};
