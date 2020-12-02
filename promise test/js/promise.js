// 声明 MyPromise 类
class Promise {
  constructor(executor) {
    // promise 状态
    this.PromiseState = 'pending';
    // promise
    this.PromiseResult = null;
    // 回调函数
    this.callbacks = [];

    const resolve = data => {
      // resolve 函数

      // 判断状态
      if (this.PromiseState !== 'pending') {
        return;
      }
      // 1. 修改对象状态(promiseState)
      this.PromiseState = 'fulfilled'; // resolved 和 fulfilled 表示的都是成功的意思
      // 2. 设置对象结果值(promiseResult)
      this.PromiseResult = data;
      // 3.如果有回调函数，就执行回调函数
      if (this.callbacks) {
        this.callbacks.forEach(item => {
          item.onResolved(data);
        });
      }
    };
    const reject = data => {
      // 判断状态
      if (this.PromiseState !== 'pending') {
        return;
      }
      // reject 函数
      // 1. 修改对象状态(promiseState)
      this.PromiseState = 'rejected'; // 改变状态为错误
      // 2. 设置对象结果值(promiseResult)
      this.PromiseResult = data;
      // 3.如果有回调函数，就执行回调函数
      if (this.callbacks) {
        this.callbacks.forEach(item => {
          item.onReject(data);
        });
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      // throw 修改为失败状态
      reject(err);
    }
  }
  then(onResolved, onReject) {
    // 返回 Promise 类型
    return new Promise((resolve, reject) => {
      // 如果状态为 fulfilled 就执行 onResolved
      if (this.PromiseState === 'fulfilled') {
        try {
          // 获取回调函数的执行结果
          let result = onResolved(this.PromiseResult);
          // 判读 result 是不是 存在于 Promise 原型链上
          if (result instanceof Promise) {
            // 如果是 Promise 类型的对象
            result.then(
              v => {
                resolve(v);
              },
              r => {
                reject(r);
              }
            );
          } else {
            resolve(result);
          }
        } catch (err) {
          reject(err);
        }
      }

      // 如果状态为 rejected 就执行 onReject
      if (this.PromiseState === 'rejected') {
        try {
          // 获取回调函数的执行结果
          let result = onReject(this.PromiseResult);
          // 判读 result 是不是 存在于 Promise 原型链上
          if (result instanceof Promise) {
            // 如果是 Promise 类型的对象
            result.then(
              v => {
                resolve(v);
              },
              r => {
                reject(r);
              }
            );
          } else {
            resolve(result);
          }
        } catch (err) {
          reject(err);
        }
      }
      if (this.PromiseState === 'pending') {
        // 保存回调函数
        this.callbacks.push({
          // onResolved
          onResolved: () => {
            let result = onResolved(this.PromiseResult);
            if (result instanceof Promise) {
              result.then(
                v => {
                  resolve(v);
                },
                r => {
                  reject(r);
                }
              );
            } else {
              resolve(result);
            }
          },
          onReject: () => {
            let result = onReject(this.PromiseResult);
            if (result instanceof Promise) {
              result.then(
                v => {
                  resolve(v);
                },
                r => {
                  reject(r);
                }
              );
            } else {
              resolve(result);
            }
          }
        });
      }
    });
  }
  catch(err) {}
}
