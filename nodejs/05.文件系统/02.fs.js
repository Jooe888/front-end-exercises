/* 
fs(文件系统)
- 在 Node 中，与文件系统的交互是非常重要的，服务器的本质就将本地的文件发送给远程的客户端
- Node 通过 fs 模块来和文件系统进行交互
- 该模块提供了一些标准文件访问 API 来打开、读取、斜日文件，以及与其交互。
- 要使用 fs 模块，首先需要对其进行加载
  - const fs = require('fs');
*/

/* 
同步和异步调用
- fs 模块中所有的操作都有两种形式可供选择（同步和异步）
- 同步文件系统和 阻塞 程序的执行，也就是除非操作完毕，否则不会向下执行代码。
- 异步文件系统 不会阻塞 程序的执行，而是在丑哦完成时，通过回调函数将结果返回
*/

/* 
文件系统（File System）
  - 文件系统简单来说就是通过 Node 来操作系统中的文件
  - 使用文件系统，需要先引入 fs 模块，fs 是核心模块，直接引入不需要下载

同步文件的写入
  1. 打开文件
    - fs.openSync(path,flags[,mode])
      - path 要打开文件的路径
      - flags 打开文件要做的操作的类型
        - 'r': 打开文件用于读取。 如果文件不存在，则会发生异常。
        - 'w': 打开文件用于写入。 如果文件不存在则创建文件，如果文件存在则截断文件。
      - mode 设置文件的操作权限，一般不传
    返回值：
      - 该方法会返回一个文件的描述符作为结果，我们可以通过该描述符来对文件进行各种操作
  2. 向文件中写入内容
    - fs.writeSync(fd, string[, position[, encoding]])
      - fd 文件的一个描述符，需要传递我们要写入的文件的描述
      - string 要写入的内容
      - opsition 写入起始的位置
      - encoding 写入的
  3. 保存并关闭文件
    - fs.closeSync(fd)
      - fd 文件的一个描述符，需要传递我们要写入的文件的描述


异步文件的写入
  1. 打开文件
    - fs.open(path[, flags[, mode]], callback)
      - path 要打开文件的路径
      - flags 打开文件要做的操作的类型
        - 'r': 打开文件用于读取。 如果文件不存在，则会发生异常。
        - 'w': 打开文件用于写入。 如果文件不存在则创建文件，如果文件存在则截断文件。
      - mode 设置文件的操作权限，一般不传
      - callback 回调
    - 异步调用的方法，结果都是通过回调函数的参数返回的
    - 回调函数
      - err 错误对象，如果没有错误则为 null
      - fd 文件的描述符
      
  2. 向文件中写入内容
    - fs.write(fd, string[, position[, encoding]], callback)
      - fd 文件的一个描述符，需要传递我们要写入的文件的描述
      - string 要写入的内容
      - opsition 写入起始的位置
      - encoding 写入的
  3. 保存并关闭文件
    - fs.close(fd, callback)
      - fd 文件的一个描述符，需要传递我们要写入的文件的描述
*/

const fs = require('fs');

/* 
// 同步文件写入
// 打开文件
let fd = fs.openSync('hello.txt', 'w');
// 向文件写入内容
fs.writeSync(fd, '今天的天气真不错～～～～');
// 保存并关闭
fs.closeSync(fd);

console.log('fd', fd);
 */

// 异步文件写入 （下面是回调地域）
// 打开文件（异步方法没有返回值）
fs.open('hello.txt', 'w', (err, fd) => {
  // 判断是否出错
  if (err) {
    console.log(err);
    return;
  }
  fs.write(fd, ' 这里是异步写入的内容~~~', (err) => {
    if (err) {
      console.log('wrire-err', err);
    }
    fs.close(fd, (err) => {
      if (err) {
        console.log('关闭失败', err);
      }
      console.log('关闭成功');
    });
  });
});
//
