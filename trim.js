//
// let fn1 = (a,b,c,d) => {
//     return a - b * c + d
// }
// function bindLeft(fn, a, b) {
//     return function (c, d) {
//         return fn(a,b,c,d)
//     }
// }
// //
// let fn2 = bindLeft( fn1,1,2)
//
// console.log(fn2)
// console.log(fn2(3,4))


// var p=new Promise(function (resolve,reject) {
//     console.log('a')
//     resolve()
// })
// setTimeout(()=>{
//     console.log('d')
// },0)
//
// p.then(()=>{
//     console.log('c')
// })
// console.log('b')

// const arr=[1,2,3,6,4,-99,-101]
//
// var t=arr.filter((item)=>{
//     return item % 2 != 0
//
// })
// var y=t.reduce((cur,pre)=>{
//     console.log(cur)
//     return Number(cur)+ Number(pre)
// },[])
// console.log(y)
var arr=[11,-1,6,5,-4,-7,9,8]
var len = arr.length
for (var i=0;i<len-1;i++){
    if(arr[i]>0) {
        for(var j=0;j<len-1-i;j++){
            if(arr[j]>arr[j+1] && arr[j+1]> 0){
                var tem= arr[j+1]
                arr[j+1]=arr[j]
                arr[j]=tem
            }
        }
    }
}
console.log(arr)