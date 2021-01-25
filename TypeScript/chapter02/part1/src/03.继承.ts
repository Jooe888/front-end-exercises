(() => {
  // 定义一个 Animal 类
  class Animal {
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
      console.log(`${this.name}在叫`);
    }
  }

  // 定义一个表示狗的类
  // 使 Dog 类继承 Animal 类
  /*  
    Dog extends Animal
      - 此时，Animal 被称为父类，Dog 被称为子类
      - 使用继承后，之类将会拥有父类所有的方法和属性
      - 通过继承可以将多个类中共有的代码写在一个父类中，
          这样只需要写一次即可让所有的之类都同时拥有父类中的属性 
  */
  class Dog extends Animal {}

  class Cat extends Animal {}

  const dog = new Dog('小黑', 5);
  const cat = new Cat('咪咪', 3);

  console.log(dog);
  console.log(cat);
  dog.bark();
  cat.bark();
})();
