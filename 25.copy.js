var obj = {
    id: 1,
    name: 'cyy',
    msg: {
        age: 18
    },
    color: ['pink','red']
}
var o = {}
// 浅拷贝只是拷贝一层,更深层次对象级别的只拷贝引用
// for(let key in obj) {
//     o[key] = obj[key]
// }
// o.name = 'cyy1'
// o.msg.age = 19 
// console.log(obj)

// Object.assign(o,obj)
// console.log(o)

console.log('===========')
// 深拷贝拷贝多层,每一级别的数据都会拷贝
function deepCopy(newobj, oldobj) {
    for (let k in oldobj) {
        var item = oldobj[k];
        if (item instanceof Array) {
            newobj[k] = [];
            deepCopy(newobj[k],item)
        }else if (item instanceof Object) {
            newobj[k] = {};
            deepCopy(newobj[k],item)
        }else {
            newobj[k] = item
        }
    }
}
deepCopy(o,obj)
console.log(o)