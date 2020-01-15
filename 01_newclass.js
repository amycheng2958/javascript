// class Star {
//     constructor(name) {
//         this.name = name
//     }
//     sing(song) {
//         console.log(this.name +'唱' + song)
//     }
// }
// const ldh = new Star('刘德华')
// ldh.sing('心太软')

function fn(name) {
    this.name = name
}
fn.prototype.say = function () {
    console.log(this.name)
}

var fn1 = new fn('cyy')
fn1.say()

function fn2(name) {
    var obj = {}
    obj.name = name
    obj.__proto__ = fn.prototype
    return obj
}
var fb3 = fn2('cyy1')
var fb4 = new fn('cyy1')
console.dir(fb3.__proto__ === fb4.__proto__)
console.dir(fb3.__proto__.constructor === fb4.__proto__.constructor)
console.dir(fb3.constructor === fb4.constructor)
console.log(fb3.name === fb4.name)