function Star(name) {
    this.name = name;
    this.move = function () { 
        console.log('我会跳舞')
    }
}
let ldh = new Star('刘德华'); 
// name是实例成员,就是构造函数通过内部this添加的成员,只能通过实例化的对象访问
console.log(ldh.name)
// sex就是静态成员,在构造函数本身添加成员,只能通过构造函数访问
Star.sex = 'male'
console.log(Star.sex)