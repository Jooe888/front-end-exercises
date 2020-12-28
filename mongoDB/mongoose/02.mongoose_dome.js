// 引入
const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
// // 断开数据库
// mongoose.disconnect();

mongoose.connection.once('open', () => {
  console.log('数据库连接成功～～～');
});
mongoose.connection.once('close', () => {
  console.log('数据库连接已经断开～～～');
});

// 创建 Schema（模式）对象
// 将 mongoose.Schema 赋值给一个变量
const { Schema } = mongoose;

const blogSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  age: String,
  gender: {
    type: String,
    default: 'female'
  },
  address: String
});

// 通过 Scheme 来创建 Model
// Model 代表的是数据库中的集合，通过 Model 才能对数据库进行操作
// mongoose.model(modelName, schema);

const StuModel = mongoose.model('student', blogSchema);

// 向数据库中插入一个文档
// StuModel.create(doc,function(err){});

StuModel.create(
  {
    name: '孙悟空',
    age: 18,
    gender: 'male',
    address: '花果山'
  },
  err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('插入成功');
  }
);

/*
- 有了 Model，就可以来对数据库进行增删改查的操作了 
  - Model.create(doc(s),[callback])
    - 用来创建一个或多个文档并添加到数据库中
    - 参数
      - doc(s) 可以是一个文档对象，也可以是一个文档对象的数组
      - callback 当操作完成以后调用的回调函数
*/
