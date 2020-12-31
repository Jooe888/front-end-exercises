/*
 * resource 1.md 2.md 3.md 文件内容
 */

// const fs = require('fs');

// fs.readFile('./resource/1.md', (err, data1) => {
//   if (err) {
//     throw err;
//   }
//   fs.readFile('./resource/2.md', (err, data2) => {
//     if (err) {
//       throw err;
//     }
//     fs.readFile('./resource/3.md', (err, data3) => {
//       if (err) {
//         throw err;
//       }
//       console.log(data1 + data2 + data3);
//     });
//   });
// });

// async await 获取文件

const fs = require('fs');
const util = require('util');
const mineReadFile = util.promisify(fs.readFile);

async function main() {
  try {
    // 读取文件的内容
    let data1 = await mineReadFile('./resource/1.md');
    let data2 = await mineReadFile('./resource/2.md');
    let data3 = await mineReadFile('./resource/3.md');
    console.log(`${data1}${data2}${data3}`);
  } catch (err) {
    console.log(err);
  }
}
main();
