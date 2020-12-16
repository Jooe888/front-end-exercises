/* 
Buffer(缓冲区)
  - Buffer 的结构和我们的数组很像，操作的方法也和我们的数组类似
  - 数组中不能存储二进制文件，而 Buffer 就是专门用来存储二进制数据
  - 使用 buffer 不需要引入模块，直接使用即可
  - 在 buffer 中存储的都是二进制数据，但是显示的时候都是以16进制的形式显示
    - buffer 中的一个元素，占用内存的一个字节
    - buffer 中每一个元素的范围是从 00 - ff  (十进制: 0 - 255)(二进制： 0000000 - 11111111)
    - 计算机中， 一个 0 或者 一个 1 ，我们称为 1 位(bit) 
    - 8bit = 1byte(字节) 
    - 1024byte = 1kb
    - 1024kb = 1mb
    - 1024mb = 1gb
    - 1024gb = 1tb
    - buffer 中的大小一旦确定，则不能修改，buffer 实际上是对底层内存的直接操作

*/

let str = 'Jooe';

// 将一个字符串保存到 buffer 中

let buf = Buffer.from(str);

console.log('str', buf);

// new Buffer 已废弃，不推荐使用
// let buf10 = new Buffer(10);

// 创建一个指定大小的buffer，alloc（分配）的是连续的内存里面的，并且不能修改
let buf10 = Buffer.alloc(10);
// 通过索引来操作buf中的元素
buf10[0] = 99;
buf10[1] = 55;
buf10[10] = 15;
console.log(buf10);

// Buffer.allocUnsafe(sice) 创建一个指定大小的 buffer，但是 buffer 中可能含有敏感数据

let buf1 = Buffer.alloc(10);
let buf2 = Buffer.allocUnsafe(10);
console.log('buf1', buf1);
console.log('buf2', buf2);

/* 
总结
Buffer.from(str); // 将一个字符串转换为 buffer
Buffer.alloc(10); // 创建一个指定大小的 buffer
Buffer.allocUnsafe(10); // 创建一个指定大小的 buffer,但是可能包含敏感数据
*/

// 直接 toString() 可把 buffer 转换为字符串
let buf4 = Buffer.from('我是一段文本数据');
console.log('buf4', buf4.toString());
