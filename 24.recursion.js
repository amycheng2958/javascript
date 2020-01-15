// function fn(n) {
//     if (n == 1) {
//         return 1
//     }
//     return n * fn(n-1)
// }
// console.log(fn(3))

// function fn(n) {
//     if (n == 1) {
//         return 1
//     }
//     return n + fn(n - 1)
// }
// console.log(fn(3))

// 菲波那契序列
// function fb (n) {
//     if (n == 1 || n == 2) {
//         return 1
//     }
//     return fb(n-1) + fb(n-2)
// }
// console.log(fb(4))

// 利用递归遍历数据
var data  = [{
    id: 1,
    name: '家电',
    goods: [{
        id: 11,
        name: '冰箱',
        goods: [{
            id: 111,
            name: '格力',
        },{
            id: 112,
            name: '海尔',
        }]
    },{
        id: 12,
        name: '洗衣机'
    },{
        id:2,
        name:'服饰'
    }]
}]
function getData(dt,id) {
    var o = {}
    dt.forEach(element => {
        if (element.id == id) {
            o = element
            return element
        }else if (element.goods && element.goods.length) {
            o = getData(element.goods,id)
        }
    });
    return o
}
console.log(getData(data,111))