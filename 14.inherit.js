// 父构造函数
function Father (name,age) {
    // this指向父构造函数的对象实例
    this.name = name;
    this.age = age
}
// 子构造函数
function Son (name,age,score) {
    // this指向子构造函数的对象实例
    Father.call(this,name,age)
    this.score = score
}

let ldh = new Son('刘德华',18,100);
console.log(ldh)
