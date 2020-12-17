const fs = require('fs');
/* 
fs.existsSync(path)
  - 检查一个文件是否存在
*/

let isExists = fs.existsSync('2123.ma4');
console.log('isExists', isExists);

/* 
fs.stat(path,callback)
fa.statSync(path)
  - 获取文件的状态
  - 它会给我们返回一个对象，这个对象中保存了当前对象状态的相关信息
*/

fs.stat('hello.txt', (err, stats) => {
  /* 
    size 文件的大小
    stats.isFile() 是否是一个文件
    stats.isDirectory() 是否是一个文件夹
  */
  if (err) {
    console.log('err', err);
    return;
  }
  console.log('stats', stats.isDirectory());
});

/* 
fs.unlink(path, callback)
fs.unlinkSync(path)
  - 删除文件
*/
// 删除文件
// fs.unlinkSync('../.DS_Store');

/* 
fs.readdir(path[, options], callback)
fs.readdirSync(path[, options])
  - 读取一个目录的目录结构
*/

fs.readdir('.', (err, files) => {
  if (err) {
    console.log('err', err);
    return;
  }
  console.log('files', files);
});

/* 
fs.truncate(path[, len], callback)
fs.truncateSync(path[, len])
  - 截断文件,将文件修改为指定的大小
*/
// fs.truncateSync('hello3.txt', 9);

/* 
fs.mkdir(path[, options], callback)
fs.mkdirSync(path[, options])
  - 创建目录
*/
// fs.mkdirSync('hello');

/*
fs.rmdir(path[, options], callback)
fs.rmdirSync(path[, options])
  - 删除一个文件夹
*/
// fs.rmdirSync('hello');

/* 
fs.rename(oldPath, newPath, callback)
fs.renameSync(oldPath, newPath)
  - 文件重命名
  - 参数：
    - oldPath 旧的路径
    - newPath 新的路径
    - callback 回调函数
*/

fs.rename('hello.txt', 'hello2.txt', err => {
  if (err) {
    console.log('err', err);
    return;
  }
  console.log('修改成功');
});

/* 
fs.watchFile(filename[, options], listener)
  - 监视文件的修改
  - 参数：
    - filename 要监视的文件的名字
    - options 配置选项
    - listener 回调函数，当文件发生变化时，回调函数会执行
      - listener 参数
        - curr 当前文件的状态
        - prev 修改前文件的状态
          - 这两个都想都是 stats 对象
*/

fs.watchFile('hello2.txt', { interval: 1000 }, (curr, prev) => {
  console.log(`当前的最近修改时间是: ${curr.atime}`);
  console.log(`之前的最近修改时间是: ${prev.atime}`);
});
