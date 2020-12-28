const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
// // 断开数据库
// mongoose.disconnect();
