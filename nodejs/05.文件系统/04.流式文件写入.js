/* 
同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
*/

const fs = require('fs');

// 流式文件写入
// 创建一个可写流
/* 
fs.createWriteStream(path[, options])
  - 可以用来创建一个可写流
  - path 文件路径
  - options 配置的参数
*/

const ws = fs.createWriteStream('hello4.txt');

/* 
可以通过监听流的 open 和 close 事件来监听流的打开和关闭
  - on(事件字符串,回调函数) 
    - 可以为对象绑定一个事件
  - once(事件字符串,回调函数)
    - 可以为对象绑定一个一次性的事件，该事件将会在触发一次以后自动关闭
*/
ws.once('open', () => {
  console.log('流打开了～～～');
});

// 通过 ws 向文件中输入内容
ws.write('hello ');
ws.write('node ');
ws.write('js');
ws.write('!');
