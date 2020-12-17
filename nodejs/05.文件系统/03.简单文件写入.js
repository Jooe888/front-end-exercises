/* 
简单文件写入
  - fs.writeFile(file,data[,options],callback)
  - fs.writeFileSync(file,data[, options])
    - file 要操作的文件的路径
    - data 要写入的数据
    - options 选项，可以对写入进行一些设置
    - callback 当写入完成以后执行的函数
 */

// 引入 fs 模块

const fs = require('fs');

// 写入
fs.writeFile(
  'hello3.txt',
  `
哦哦
哈哈哈
嘟嘟`,
  { flag: 'a' },
  err => {
    if (err) {
      console.log('err', err);
      return;
    }
    console.log('写入成功');
  }
);
