// 引入一个包
const path = require('path');

// webpack 中的所有的配置信息都应该写在 module.exports 中
module.exports = {
  // 指定入口文件
  entry: './src/index.ts',
  // 指定打包文件所在的目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件的文件
    filename: 'bundle.js'
  },

  // 指定 webpack 打包时要使用的模块
  module: {
    // 指定要加载的规则
    reles: [
      {
        // test 指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的 loader
        use: 'ts-loader',
        // 要排除的文件
        exclude: /node_modules/
      }
    ]
  }
};
