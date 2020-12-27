/*  
1. 下载安装 Mongoose
  - npm install mongoose --save
2. 在项目中引入 mongoose
  - const mongoose = require('mongoose');
3. 连接 MongoDB 数据库
  - mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
  - 如果端口号是默认端口号(27017) 则可以省略不写
4. 断开数据库连接（一般不需要调用）
  - mongoose.disconnect()
- 监听 MongoDB数据苦的连接状态
  - 在 mongoose 对象中，有一个属性叫做 connection，该对象表示的就是数据库的连接
    - 通过监视该对象的状态，可以来监听数据库的连接与断开
    - mongoose.connection.once('open',functions(){}); // 数据库连接成功的事件
    - mongoose.connection.once('close',functions(){}); // 数据库断开连接的事件
*/

// 引入
const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
// 断开数据库
mongoose.disconnect();

mongoose.connection.once('open', () => {
  console.log('数据库连接成功～～～');
});
mongoose.connection.once('close', () => {
  console.log('数据库连接已经断开～～～');
});
// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
