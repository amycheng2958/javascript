let that;
class Tab {
    constructor(id) {
        that = this;
        // 获取元素
        this.main = document.querySelector(id)
       
        this.addbtn = document.querySelector('.addbtn')
        this.init()
    }
    init() {
        this.updataNode()
        // 初始化相关元素的绑定事件
        this.addbtn.onclick = this.add;
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].setAttribute('index',i);
            this.lis[i].onclick = this.toggle
        }
    }
    toggle() {
        that.clearClass()
        this.className = 'active'
        that.sections[this.getAttribute('index')].className = 'conactive'
    }
    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    updataNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
    }
    remove() {

    }
    add() {
        alert(1)
        this.init()
    }
    edit() { }
}
new Tab('#tab')