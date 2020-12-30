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

/* 
  Document 和集合中的文档一一对应， Document 是 Model 的实例
    - 通过 Model 查询到结果都是 Dcoument
*/

// 创建一个Document

// const stu = new StuModel({
//   name: '奔波儿灞',
//   age: 48,
//   gender: 'male',
//   address: '碧波潭'
// });

// console.log(stu);

// /*
//   document 的方法
//   Document.prototype.save([options],[fn])
// */

// stu.save(err => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('保存成功');
// });

// StuModel.find({}, '-_id -__v', (err, docs) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(docs);
// });

StuModel.findOne({}, 'name age -_id', (err, doc) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(doc);
  /* 
  get(name)
    - 获取文档中指定属性值
  set(name,value)
    - 设置文档指定的属性值
  id
    - 获取文档的 _id 属性值
  toJSON()
    - 转换为一个JSON对象
  toObject()
    - 将 Document 对象转换为一个普通的 js 对象
      -  转换为普通的js对象以后，注意所有的 Document 对象的方法和属性都不能使用了
*/

  // console.log(doc.get(age));
  // console.log(doc.age);
  // doc.set('name', '竹萧萧');
  // doc.name = '猪小小';

  // console.log(doc.id);
  // console.log(doc._id);

  const o = doc.toObject();
});
