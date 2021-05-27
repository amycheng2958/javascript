// const obj ={
//     store: [1,2,3],
//     [Symbol.iterator]: function(){
//         const self = this;
//         let index = 0
//         return {
//             next: function(){
//                 const res = {
//                     value: self.store[index],
//                     done: index >= self.store.length
//                 }
//                 index++
//                 return res
//             }

//         }
//     }
// }
// for(let item of obj) {
//     console.log(item)
// }
// const iter = obj[Symbol.iterator]()

// const a = iter.next()


const todos = {
    life: ['吃饭','打豆豆'],
    learn: ['语文','数学'],
    work: ['喝茶'],
    each: function(callback){
        const arr = [...this.life,...this.learn,...this.work]
        for(let item of arr) {
            callback(item)
        }
    },
    [Symbol.iterator]: function(){
        const all = [...this.life,...this.learn,...this.work]
        let index = 0
        return {
            next: function(){
                const res = {
                    value: all[index],
                    done: index++ >= all.length  // 先赋值再加加
                }
                return res
            }
        }
    }
}
const f =todos[Symbol.iterator]()
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())

for (let item of todos) {
    console.log(item)
}
