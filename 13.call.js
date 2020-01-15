let name = 'cyy'
function fn() {
    console.log(this.name)
}
let o = {
    name: 'cyy1'
}
fn()
fn.call(o)