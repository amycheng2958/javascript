class Star {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    say() {
        console.log(this)
        console.log(this.x+this.y)
    }
}
class Son extends Star {
    constructor(x,y) {
        super(x,y)
        
    }
}
let a=new Son(1,2)
a.say() 