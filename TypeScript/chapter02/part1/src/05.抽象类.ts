(() => {
  /*  
    以 abstract 开头的类是抽象类
      抽象类和其他类区别不大，只是不能用来创建对象
      抽象类就是专门用来被继承的类

      抽象类中可以添加抽象方法
  */
  abstract class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    /*  
      定义一个抽象方法
      抽象方法使用 abstract 开头，没有方法体
      抽象方法只能定义在抽象类這，之类必须对抽象方法进行重写

    */
    abstract bark(): void;
    // {
    //   // 在方法在是可以通过 this 来表示当前调用方法的对象
    //   console.log(`${this.name}在叫`);
    // }
  }

  class Dog extends Animal {
    bark(): void {
      // 在方法在是可以通过 this 来表示当前调用方法的对象
      console.log(`${this.name}在叫`);
    }
  }

  class Cat extends Animal {
    bark(): void {
      // 在方法在是可以通过 this 来表示当前调用方法的对象
      console.log(`${this.name}在叫`);
    }
  }
  const dog = new Dog('旺财');
  const cat = new Cat('咪咪');
  dog.bark();
  cat.bark();
})();
