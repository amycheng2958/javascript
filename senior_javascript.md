# javascript 高级

`来源：2019-08 黑马程序员`

## 面向对象和类的继承

### 课程目标

### 目录

- [面向对象编程介绍](#)

- [es6中的类和对象](#)

- [类的继承](#)

- [面向对象的案例](#)


### 面向对象

- 面向对象编程和面向过程编程
- es6 中的类和对象
  - 创建类的方法和属性
  - 类的继承
  - super 关键字,访问和调用对象父类上的函数,包括构造函数和普通函数
  - 类里面 this 指向,和类方法里面的 this
    - constructor 的 this 指向创建的实例对象
    - 类方法里面的 this 指向方法的调用者
- 05.面对对象版 tab 栏切换(难点)
  - 抽象对象 tab 对象
    - 切换 tab 功能
    - 添加
    - 删除
    - 修改
- 06.构造函数的实例成员和静态成员
  - 实例成员,构造函数内部通过 this 添加成员,只能通过实例化对象来访问
  - 静态成员,在构造函数本身上添加的成员,只能通过构造函数访问
- 07.原型对象 prototype
  - 原型是什么?原型是对象,我们也称 prototype 为原型对象,它是每个构造函数都有的属性
  - 原型的作用?共享方法,节约内存资源
    - 构造函数的问题,存在内存浪费,每个构造函数的实例对象都给构造函数里面的方法开辟了新的内存空间
    - 构造函数原型 prototype,构造函数通过原型分配的函数是所有对象所共享的,可以把那些不变的方法定义在 prototype 对象上,这样所有的对象实例可以共享这些方法
- 08.对象原型**proto**
  - 对象会有个属性**proto**指向构造函数的 prototype 原型对象,之所以我们对象可以使用构造函数 prototype 原型对象的属性和方法,就是因为对象有**proto**的存在
- 09.constructor 构造函数
  - 对象原型(**proto**)和构造函数(prototype)原型对象里面都有一个属性 constructor 属性,constructor 我们成为构造函数,因为它指向构造函数本身,constructor 主要用于记录该对象引用语哪个构造函数,它可以让原型对象指向原来的构造函数
  - ![image-20191108174119174](/Users/ants/Library/Application Support/typora-user-images/image-20191108174119174.png)
- 10.原型链
- ![image-20191111081021424](/Users/ants/Library/Application Support/typora-user-images/image-20191111081021424.png)
- 11.js 成员查找机制
  - 当访问一个对象的属性(包括方法)时,首先查找这个对象自身有没有该属性
  - 如果没有就查找它的原型,也就是**proto**指向的 prototype 原型对象
  - 如果还没有就查找原型对象的原型(Object 的原型对象)
  - 依次类推一直找到 Object 为止(null)
  - **proto**对象原型的意义在于为对象成员查找机制提供一个方向,或者说一条路线
- 12.扩展内置对象
- 13.call

* 调用函数
* 改变 this 指向

- 14.继承(难点)

* 借用构造函数继承父类型属性
* 借用构造函数继承父类型方法

- 15.es5 数组新增方法:

* forEach,遍历所有值
* filter,遍历所有值
* some,如果查询数组中唯一元素,用 some 方法更高效,因为它找到这个元素后,就会终止循环
* map
* every

- 16.es5 字符串新增方法

* trim

- 17.es5 新增对象方法

* Object.keys()
* Object.defineProperty
  - value, 属性值
  - writable, 是否可以重写
  - enumerable, 是否可以被枚举
  - configurable, 目标属性是否可以被删除或是否可以再次修改特性
  - 
## 函数进阶

### 函数的定义和调用

### this

### 严格模式

### 高阶函数

### 闭包

### 递归

#### 1.函数的定义方式

* 函数声明方式function关键字(命名函数)
 
  ```javascript
    function fn() {}
  ```

* 函数表达式(匿名函数)
 
  ```javascript
  var fn = function() {};
  ```

* 利用 new Function('参数 1','参数 2','函数体' )
 
  ```javascript
  var fn = new Function("a", "b", "console.log(a+b)");
  fn(1, 2);
  // 所有function都是Function的实例
  // 所有function都是对象
  fn.__proto__ === Function.prototype
  fn.__proto__.constructor = Function
  console.log(fn instanceif Object)
  ```

#### 2.函数的调用

##### 普通函数
  
  ```javascript
  var fn = function() {
    console.log(this);
  };
  fn();fn.call()
  // this指向window
  ```

##### 对象方法
 
  ```javascript
  var o = {
    say: function() {
      console.log(this);
    }
  };
  o.say();
  // this指向o
  ```

##### 构造函数

  ```javascript
  function Star(name) {
    this.name = name;
  }
  new Star()
  // this指向实例对象,原型对象里面的方法指向调用者
  ```

##### 绑定事件函数

  ```javascript
  btn.onclick = function(){}
  // this指向函数调用者
  ```

##### 定时器函数

  ```javascript
  setInterval(function(){},1000)
  // this指向window
  ```

##### 立即执行函数

  ```javascript
  (function(){})()
  // 自动调用
  // this指向window
  ```
  
### 3.this的指向

> 函数的不同调用方式决定了this的指向不同

#### 4.改变函数内部this的指向

##### call 方法

* fn.call(thisArg,arg1,arg2,...)
* call可以调用函数，也可以 改变函数内部的this指向
* call还可以实现继承
 ```javascript
 function Father(name,age,sex) {
   this.name = name;
   this.age = age;
   this.sex = sex;
 }
 function Son (name,age,sex) {
   Father.call(this,name,age,sex)
 }

 var son = new Son('cyy',18,'女')
 ```


##### bind 方法

* 不会调用函数,但是能改变函数 this 指向
* 返回的是原函数改变 this 之后产生的新函数

```javascript
var o = {
  name: "cyy"
};
function fn(a, b) {
  console.log(this.name);
  console.log(a + b);
}
var f = fn.bind(o, 1, 2);
f();
// this指向o
```

- 21.严格模式(https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)

* 变量规定
  - 必须先声明,再使用
  - 严禁删除已经声明变量,例如 delete x 语法是错误的
* 严格模式下 this 指向问题
  - 以前再全局作用域函数中的 this 指向 window 对象
  - 严格模式下全局作用域函数中的 this 指向 undefined
  - new 实例化的构造函数指向创建的对象实例
  - 定时器 this 还是指向 window
  - 事件,对象还是指向调用者
* 函数变化
  - 函数不能有重名的参数
  - 函数必须声明在顶层,新版本的 js 会引入“块级作用域”,为了与新版本接轨,不允许在非函数代码块内声明函数

- 22.高阶函数

* 是对其他函数进行操作的函数,接收函数作为参数,或将函数作为返回值输出

```javascript
function fn(callback) {
  callback && callback();
}
fn(function() {
  alert(1);
});
function fun() {
  return function() {};
}
```

- 23.闭包(难点)

* 有权访问另一个函数作用域中变量的函数
* 作用:延伸了变量的作用范围

- 24.递归(难点)

* 一个函数在内部可以调用其本身,那么这个函数就是递归函数
* 容易发生“栈溢出”问题,因此要添加推出条件 return

- 25.深浅拷贝(难点)

* 浅拷贝只是拷贝一层,更深层次对象级别的只拷贝引用
* 深拷贝拷贝多层,每一级别的数据都会拷贝

[怎么判断数据类型](https://www.cnblogs.com/Amy-world/p/9958208.html)
[js 的 new 到底做了什么](https://zhuanlan.zhihu.com/p/23987456?refer=study-fe)
[js 的继承方式](https://blog.csdn.net/zhuanyemanong/article/details/80325387)
[es6 的 class 的 super、static、constructor]
for in ,for of,Object.keys(),getOwnpropertyNames(方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括 Symbol 值作为名称的属性）组成的数组),区别
instanceof 和 constructor

[继承与原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
https://cloud.tencent.com/developer/article/1408283
《JavaScript 高级程序设计第 3 版》第 6 章——面向对象的程序设计

6 种继承的方案，分别是原型链继承、借用构造函数继承、组合继承、原型式继承、寄生式继承、寄生组合式继承。图灵社区本书地址，后文放出 github 链接，里面包含这几种继承的代码 demo。

《JavaScript 面向对象编程第 2 版》第 6 章——继承
``
12 种继承的方案：

原型链法（仿传统）
仅从原型继承法
临时构造器法
原型属性拷贝法
全属性拷贝法（即浅拷贝法）
深拷贝法
原型继承法
扩展与增强模式
多重继承法
寄生继承法
构造器借用法
构造器借用与属性拷贝法
《ES6 标准入门》第 21 章——class 的继承

《深入理解 ES6》第 9 章——JavaScript 中的类

《你不知道的 JavaScript》上卷第 6 章——行为委托和附录 A（ES6 中的 class）

## 《JavaScript 高级程序设计第 3 版》第 6 章——面向对象的程序设计

### 创建对象

#### 工厂模式

- 优点：工厂模式解决了创建多个相似对象的问题
- 缺点：没有解决对象识别的问题(即怎样知道一个对象的类型)

#### 构造函数模式

- 创建自定义的构造函数意味着将来可以将它的实例标识为一种特定的类型，可以用 constructor 或 instanceof（更可靠）检测数据类型
- 缺点：使用构造函数的主要问题，就是每个方法都要在每个 实例上重新创建一遍

#### 原型模式

- 缺点：1、原型中所有属性是被很多实例共享的，实例可以改变被共享的属性的值，2、它省略了为构造函数传递初始化参数这一环节，结果所有实例在 默认情况下都将取得相同的属性值

#### 组合使用构造函数模式和原型模式

- 优点：解决了原型模式的问题

Object.getPrototypeOf()返回的对象实际就是这个对象的原型
要取得对象上所有可枚举的**实例属性**，可以使用 ECMAScript 5 的 Object.keys()方法
在使用 `for-in` 循环时，返回的是所有能够通过对象访问的、可枚举的(enumerated)属性，其中 既包括存在于**实例中的属性**，也包括存在于**原型中的属性**
使用 `hasOwnProperty()`方法可以检测一个属性是存在于实例中，还是存在于原型中。这个方法(不 要忘了它是从 Object 继承来的)只在给定属性存在于对象实例中时，才会返回 true。
如果你想要得到所有实例属性，无论它是否可枚举，都可以使用 Object.getOwnPropertyNames() 方法。

给构造函数添加原型，注意：由于原型对象重新赋值，constructor 已经改变，需要重新指定，但是默认情况下 constructor 是不可枚举的
所以

```javascript
function Person() {}
Person.prototype = {};
Object.defineProperty(Person.prototype, "constructor", {
  enumerable: false,
  value: Person
});
```

ES6 入门
class 类中 constructor 方法默认返回实例对象（即 this），完全可以指定返回另外一个对象。

```javascript
class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }

  get html() {
    return this.element.innerHTML;
  }

  set html(value) {
    this.element.innerHTML = value;
  }
}

var descriptor = Object.getOwnPropertyDescriptor(
  CustomHTMLElement.prototype,
  "html"
);
```
