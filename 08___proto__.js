function Star(name) {
    this.name = name;
}
Star.prototype.sing = function() {
    console.log('我会唱歌')
}
let ldh = new Star('刘德华'); 
// 因为实例化过程中,实例对象会自动给自己添加一个__proto__指向构造函数的原型对象prototype,所以实例可以使用prototype上的方法
ldh.sing()
console.log(ldh.__proto__ === Star.prototype)  // true  
// 方法查找规则,首先看ldh是否有sing方法,再去构造函数prototype原型对象上查找sing方法

