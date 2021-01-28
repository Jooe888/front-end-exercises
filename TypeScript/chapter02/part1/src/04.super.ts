(() => {
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    bark() {
      // 在方法在是可以通过 this 来表示当前调用方法的对象
      console.log(`${this.name}在叫`);
    }
  }

  class Dog extends Animal {
    age: number;
    constructor(name: string, age: number) {
      // 如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
      super(name); // 调用父类的构造函数
      this.age = age;
    }
    bark() {
      // 在类的方法中，super 就表示当前类的父类
      super.bark();
    }
  }
  const dog = new Dog('旺财', 11);
  dog.bark();
})();
