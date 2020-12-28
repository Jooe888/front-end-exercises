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
- 有了 Model，就可以来对数据库进行增删改查的操作了 
  - Model.create(doc(s),[callback])
    - 用来创建一个或多个文档并添加到数据库中
    - 参数
      - doc(s) 可以是一个文档对象，也可以是一个文档对象的数组
      - callback 当操作完成以后调用的回调函数
- 查询
  - Model.find()
    - 参数 Parameters
    - filter «Object|ObjectId»
      - 查询的条件
    - [projection] «Object|String|Array<String>» optional fields to return, see Query.prototype.select()
      - 查询的 投影 （是不是想显示所有的字段） 
    - [options] «Object» optional see Query.prototype.setOptions()
      - 查询选项（skip limit）
    - [callback] «Function»
      - 回调函数，查询结果会通过回调函数返回
        - 回调函数必须传，如果不传回调函数，则不会查询
  通过 find() 查询的结果，返回的对象，就是 Document 文档对象
  Document 对象是 Model 的实例
*/

// StuModel.create(
//   [
//     {
//       name: '猪八戒',
//       age: 28,
//       gender: 'male',
//       address: '高老庄'
//     },
//     {
//       name: '唐僧',
//       age: 16,
//       gender: 'male',
//       address: '女儿国'
//     }
//   ],
//   err => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log('插入成功');
//   }
// );

// StuModel.find({}, 'name age -_id', { skip: 3, limit: 1 }, (err, docs) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(docs);
// });

// StuModel.findOne({}, 'name age -_id', (err, doc) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(doc);
// });

// StuModel.findById('5fe943932263e6291c242377', 'name age -_id', (err, doc) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(doc);
// });

/* 
修改
Model.update(conditions,doc,[options],[callback])
Model.updateMany(conditions,doc,[options],[callback])
Model.updateOne(conditions,doc,[options],[callback])
  - 用来修改一个或多个文档
  - 参数 Parameters
    - filter «Object» 查询条件
    - doc «Object» 修改后的对象
    - [options] «Object» optional see Query.prototype.setOptions()
    - [options.strict] «Boolean|String» overwrites the schema's strict mode option
    - [options.upsert=false] «Boolean» if true, and no documents found, insert a new document
    - [options.writeConcern=null] «Object» sets the write concern for replica sets. Overrides the schema-level write concern
    - [options.omitUndefined=false] «Boolean» If true, delete any properties whose value is undefined when casting an update. In other words, if this is set, Mongoose will delete baz from the update in Model.updateOne({}, { foo: 'bar', baz: undefined }) before sending the update to the server.
    - [options.multi=false] «Boolean» whether multiple documents should be updated or just the first one that matches filter.
    - [options.runValidators=false] «Boolean» if true, runs update validators on this command. Update validators validate the update operation against the model's schema.
    - [options.setDefaultsOnInsert=false] «Boolean» if this and upsert are true, mongoose will apply the defaults specified in the model's schema if a new document is created. This option only works on MongoDB >= 2.4 because it relies on MongoDB's $setOnInsert operator.
    - [options.timestamps=null] «Boolean» If set to false and schema-level timestamps are enabled, skip timestamps for this update. Does nothing if schema-level timestamps are not set.
    - [options.overwrite=false] «Boolean» By default, if you don't include any update operators in doc, Mongoose will wrap doc in $set for you. This prevents you from accidentally overwriting the document. This option tells Mongoose to skip adding $set.
    - [callback] «Function» params are (error, updateWriteOpResult)
    - [callback] «Function»
*/

// 修改唐僧的年龄为20
// StuModel.updateOne({ name: '唐僧' }, { $set: { age: 20 } }, err => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('修改成功！');
// });

/*
替换
Model.replaceOne() 
- filter «Object»
- doc «Object»
- [options] «Object» optional see Query.prototype.setOptions()
- [options.strict] «Boolean|String» overwrites the schema's strict mode option
- [options.upsert=false] «Boolean» if true, and no documents found, insert a new document
- [options.writeConcern=null] «Object» sets the write concern for replica sets. Overrides the schema-level write concern
- [options.omitUndefined=false] «Boolean» If true, delete any properties whose value is undefined when casting an update. In other words, if this is set, Mongoose will delete baz from the update in Model.updateOne({}, { foo: 'bar', baz: undefined }) before sending the update to the server.
- [options.timestamps=null] «Boolean» If set to false and schema-level timestamps are enabled, skip timestamps for this update. Does nothing if schema-level timestamps are not set.
- [callback] «Function» function(error, res) {} where res has 3 properties: n, nModified, ok.
 */

/* 删除
Model.remove()
Parameters
conditions «Object»
[options] «Object»
[options.session=null] «Session» the session associated with this operation.
[callback] «Function»
 */

StuModel.remove({ name: '孙悟空' }, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('删除成功');
});

StuModel.find({}, 'name age -_id', (err, docs) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(docs);
});
