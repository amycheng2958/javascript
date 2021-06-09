function ajax (url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.send()
  })
}
// Promise.all([ajax('./api/user.json'),ajax('./api/urls.json')]).then(value=>{
//   console.log(value)
// })
const p1 = ajax('/api/user.json')
const p2 = new Promise(function (resolve, reject){
  setTimeout(function(){
    reject(new Error('11'))
  },500)
})
Promise.race([p1, p2]).then(value=>{
  console.log(12345,value)
}).catch(e=>{
  console.log(e)
})