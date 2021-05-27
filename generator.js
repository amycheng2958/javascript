function * numberadd (){
    let index = 0;
    while (true) {
        yield index ++
    }
}
const createnumber = numberadd()
console.log(createnumber.next().value)

console.log(createnumber.next().value)