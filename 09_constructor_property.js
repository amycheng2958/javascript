function Star(name) {
    this.name = name;
}
// 情况一:
// Star.prototype.sing = function() {
//     console.log('唱歌')
// }
// let ldh = new Star('刘德华')
// console.log(ldh.__proto__.constructor)
// console.log(Star.prototype.constructor)

Star.prototype = {
    // 情况二: 这个给构造函数添加原型对象属性和方法的方式,相当于对原型对象重新赋值,则必须手动利用constructor指回原来的构造函数
    constructor: Star,
    sing: function() {
        console.log('唱歌')
    }
}
let ldh = new Star('刘德华')
console.log(ldh.__proto__.constructor)
console.log(Star.prototype.constructor)

