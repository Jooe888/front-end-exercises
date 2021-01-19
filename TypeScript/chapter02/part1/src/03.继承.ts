(() => {
  // 定义一个表示狗的类
  class Dog {
    name: string;
    age: number;
    // constructor 构造函数
    // 构造函数会在对象创建的时候调用
    constructor(name: string, age: number) {
      // 在实例方法中，this 就表示当前的实例
      // 在构造函数中，当前对象就是当前新建的对象
      // 在构造函数中，可以通过 this 向新建的对象中添加属性

      this.name = name;
      this.age = age;
    }

    bark() {
      // 在方法在是可以通过 this 来表示当前调用方法的对象
      console.log(this.name);
    }
  }

  const dog = new Dog('小黑', 5);

  console.log(dog);

  dog.bark();
})();
