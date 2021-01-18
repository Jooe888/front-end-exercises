// 引入一个包
const path = require('path');
// 引入 html 插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 引入 clean 插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// webpack 中的所有的配置信息都应该写在 module.exports 中
module.exports = {
  // 指定入口文件
  entry: './src/index.ts',
  // 指定打包文件所在的目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件的文件
    filename: 'bundle.js',
    // 告诉 webpack 不实用箭头函数
    environment: {
      arrowFunction: false
    }
  },
  mode: 'production',
  // 指定 webpack 打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test 指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的 loader
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: 'babel-loader',
            // 设置babel
            options: {
              // 设置定义的环境
              presets: [
                [
                  // 指定环境的插件
                  '@babel/preset-env',
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      chrome: '88',
                      ie: '11'
                    },
                    // 指定 corejs 的版本
                    corejs: '3',
                    // 使用 corejs 的方法 "usage" 表示按需加载
                    useBuiltIns: 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        // 要排除的文件
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
};
