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
          item.onRejected(data);
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

  // then 函数
  then(onResolved, onRejected) {
    // 判断回调函数
    if (typeof onRejected !== 'function') {
      onRejected = reason => {
        throw reason;
      };
    }

    // 值传递
    if (typeof onResolved !== 'function') {
      onResolved = value => value;
    }

    // 返回 Promise 类型
    return new Promise((resolve, reject) => {
      // 封装函数
      const callback = type => {
        try {
          // 获取回调函数的执行结果
          let result = type(this.PromiseResult);
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
      };
      // 如果状态为 fulfilled 就执行 onResolved
      if (this.PromiseState === 'fulfilled') {
        callback(onResolved);
      }

      // 如果状态为 rejected 就执行 onRejected
      if (this.PromiseState === 'rejected') {
        callback(onRejected);
      }
      if (this.PromiseState === 'pending') {
        // 保存回调函数
        this.callbacks.push({
          // onResolved
          onResolved: () => {
            callback(onResolved);
          },
          onRejected: () => {
            callback(onRejected);
          }
        });
      }
    });
  }

  // 添加 catch 方法
  async catch(onRejected) {
    return await this.then(undefined, onRejected);
  }

  // 添加 resolve 方法
  static resolve(value) {
    // 返回 Promise 对象
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(
          v => {
            resolve(v);
          },
          r => {
            reject(r);
          }
        );
      } else {
        // 状态设置为成功
        resolve(value);
      }
    });
  }

  // 添加 reject 方法
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  }

  // 添加 all 方法
  static all(promise) {
    // 返回结果为 Promise 对象
    // 声明变量
    let count = 0; // 成功状态数量
    let arr = []; // 成功对象的结果集
    return new Promise((resolve, reject) => {
      promise.forEach((item, index) => {
        item.then(
          v => {
            // 得知对象的状态成功了
            // 没个 promise 对象都成功了
            count += 1;
            arr[index] = v;
            // 判断 是否都成功了
            if (count === promise.length) {
              // 修改状态
              resolve(arr);
            }
          },
          r => {
            reject(r);
          }
        );
      });
    });
  }
}
