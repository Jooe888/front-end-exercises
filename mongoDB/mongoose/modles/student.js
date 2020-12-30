/*  
  用来定义 Student 模型
*/

const mongoose = require('mongoose');
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

// 定义模型
const StuModel = mongoose.model('student', blogSchema);

// exports.model = StuModel;

module.exports = StuModel;
