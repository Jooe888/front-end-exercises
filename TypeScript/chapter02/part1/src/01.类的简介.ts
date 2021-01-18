// 使用 class 关键字来定义一个累
/*  
  对象中主要包含了两个部分
    属性
    方法
*/
class Person {
  /*
    直接定义的属性是实例属性，需要通过对象的实例去访问；
    const per = new Person();
    console.log(per.name);

    使用 static 开头的属性是静态属性（类属性），可以直接通过类去访问；
    Person.age

    readonly 开头的属性表示一个只读属性 无法修改
  */
  // 定义实例属性
  readonly name: string = '孙悟空';
  age: number = 16;

  // 在属性前使用 static 关键字可以定义类属性（静态属性）
  static readonly age: number = 18;

  // 定义方法
  /*
    如果方法以 static 开头，则方法就是类方法，可以直接通过类调用
  */
  sayHello(msg: string = 'hello world!') {
    console.log(msg);
  }

  static sayHey(msg: string = 'hey world!') {
    console.log(msg);
  }
}
const per = new Person();

console.log(per);

console.log(Person.age);

per.sayHello();

Person.sayHey();
