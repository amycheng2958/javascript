function Star(name) {
    // 1.一般情况,公共属性定义到构造函数里面
    this.name = name;
    // 构造函数存在一个问题,就是存在内存浪费,每个构造函数的实例对象都给构造函数里面的方法开辟了新的内存空间
    this.move = function () { 
        console.log('我会跳舞')
    }
}
// 2.公共方法放到原型对象上,这样所有对象的实例可以共享这些方法
Star.prototype.sing = function () {
    console.log(123)
}
var ldh = new Star('刘德华')
var zxy = new Star('张学友')
console.log(ldh.sing === zxy.sing)  // true
console.log(ldh.move === zxy.move)  // false
