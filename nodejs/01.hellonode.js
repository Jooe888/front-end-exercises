let a = 5;
let b = 4;
function addition(a, b) {
  return a + b;
}
console.log(`addition函数返回:${addition(a, b)}`);
console.log('hello nodejs');

/* 
我们可以通过 exports 来像外部暴露变量和方法 
  - 只需要将需要暴露给外部的变量或方法设置为 exports 的属性即可
*/

exports.x = '这里是 node 向外暴露的 x';
exports.addition = addition;
