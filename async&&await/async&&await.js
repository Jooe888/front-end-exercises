/*
 * resource 1.html 2.html 3.html 文件内容
 */

const fs = require('fs');

fs.readFile('./resource/1.html', (err, data1) => {
  if (err) {
    throw err;
  }
  fs.readFile('./resource/2.html', (err, data2) => {
    if (err) {
      throw err;
    }
    fs.readFile('./resource/3.html', (err, data3) => {
      if (err) {
        throw err;
      }
      console.log(data1 + data2 + data3);
    });
  });
});

// async function main() {
//   // 读取第一个文件的内容
//   let data1 = await
// }
