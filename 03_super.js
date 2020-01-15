class Father {
   constructor(x,y) {
        this.x = x;
        this.y = y;
   } 
   sum() {
       console.log(this.x + this.y)
   }
}
class Son extends Father {
    constructor(x,y) {
        super(x,y);
    }
    abstract() {
        console.log(this.x - this.y)
    }
}
const son = new Son (5,2)
son.sum()
son.abstract()
