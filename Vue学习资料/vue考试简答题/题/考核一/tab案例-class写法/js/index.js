class Tab {
    constructor(id) {
        this.main = document.querySelector(id)
        this.lis = this.main.querySelectorAll('li')

    }
    // init 初始化操作让相关的元素绑定事件
    init() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lisi[i].index = i
            this.lis[i].onclick = this.toggleTab
        }
    }
    // 切换
    toggleTab() {

    }
}
new Tab('#tab')