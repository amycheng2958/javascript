// function * numberadd (){
//     let index = 0;
//     while (true) {
//         yield index ++
//     }
// }
// const createnumber = numberadd()
// console.log(createnumber.next().value)

// console.log(createnumber.next().value)

const a=[1,2]
const [q,...rest] =a


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
    [Symbol.iterator]: function *(){
        const all = [...this.life,...this.learn,...this.work]
        for(let item of all) {
            yield item
        }
    }
}
for(let item of todos) {
    console.log(item)
}
