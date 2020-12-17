/* 
1.同步文件读取
2.异步文件读取
3.简单文件读取
  - fs.readFile(path[, options], callback)
  - fs.readFileSync(path[, options])
    - path 要读取的文件的路径
    - options 读取的选项
    - callback 回调函数，通过回调函数将读取到的内容返回(err,data)
      - err 错误对象
      - data 读取到的数据，会返回一个 buffer
4.流式文件读取
*/

const fs = require('fs');

fs.readFile('hello4.txt', (err, data) => {
  if (err) {
    console.log('err', err);
    return;
  }
  console.log(data.toString());
  fs.writeFile('hello5.txt', data, err => {
    if (err) {
      console.log('err', err);
      return;
    }
    console.log('文件写入成功');
  });
});
