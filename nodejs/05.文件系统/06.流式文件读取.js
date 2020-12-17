/* 
流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中
*/

const fs = require('fs');

// 创建一个可读流
let rs = fs.createReadStream('1.jpg');
// 创建一个可写流
let ws = fs.createWriteStream('2.png');
// 监听刘的开启和关闭

rs.once('open', () => {
  console.log('可读流打开了～～～');
});
rs.once('close', () => {
  console.log('可读流关闭了～～～');
  ws.end();
});

ws.once('open', () => {
  console.log('可写流打开了～～～');
});
ws.once('close', () => {
  console.log('可写流关闭了～～～');
});

// // 如果要读取一个可读流中的数据，必须要为可读流绑定一个 data 事件，data 事件绑定完毕，它会自动开始读取数据
// rs.on('data', data => {
//   console.log('data:', data);
//   // 将读取到的数据写入到可写流中
//   ws.write(data);
// });

// pipe() 可以将可读流中的内容，直接输出到可写流中
rs.pipe(ws);
