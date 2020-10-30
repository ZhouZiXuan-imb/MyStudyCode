let that;

class Tab2 {
    // id为传来的DOM元素的id选择器
    constructor(id) {
        that = this
        // 获取所有需要的元素
        // 把DOM元素获取到 直接定义一个类的属性  把DOM元素添加到这个类的属性中
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabadd')

        this.ul = this.main.querySelector('.fisrstnav ul:first-child')
        this.tabscon = this.main.querySelector('.tabscon')
        this.init();
    }

    // 初始化项目
    init() {
        this.updateDOM()
        //  进入页面就要让所有的元素都绑定好事件  所以需要初始化
        //  添加按钮事件
        this.add.onclick = this.addControl;
        // 循环添加事件
        for (let i = 0; i < this.lis.length; i++) {
            // 给每一个li添加一个index属性 获取索引
            this.lis[i].index = i
            // 给每一个li添加点击事件
            this.lis[i].onclick = this.toggle;
            this.remove[i].onclick = this.removeControl;
            this.span[i].ondblclick = this.edit;
            this.section[i].ondblclick = this.edit;
        }
    }

    // 动态获取元素，因为每次添加了新的选项卡之后 新的选项卡并没有添加到事件 所以要重新获取元素  重新添加事件
    updateDOM() {
        this.lis = this.main.querySelectorAll('.fisrstnav li')
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.section = this.main.querySelectorAll('section')
        this.span = this.main.querySelectorAll('li span:first-child')
    }

    // 添加功能
    addControl() {
        that.exclusive();
        // 定义一个随机数 让选项卡的数字随机
        let random = Math.ceil(Math.random() * 1000 - 1)
        // 点击添加按钮之后 创建一个新的li标签
        let newLi = `<li class="liactive"><span>测试${random}</span><span class="iconfont icon-guanbi"></span></li>`
        // 创建了一个新的li标签之后要创建一个新的section标签和新的li对应
        let newSection = `<section class="conactive">测试${random}</section>`
        that.ul.insertAdjacentHTML('beforeend', newLi)
        that.tabscon.insertAdjacentHTML('beforeend', newSection)
        that.init();
    }

    // 排他功能
    exclusive() {
        // 循环遍历所有lis 把每一个lis的class删除
        this.lis.forEach(function (item) {
            item.className = ''
        })
        // 循环遍历所有section 把每一个lis的class删除
        this.section.forEach(function (item) {
            item.className = ''
        })
    }

    // 切换功能
    toggle() {
        // 使用排他功能清除其他所有的类名
        that.exclusive()
        // 给当前点击的这个li添加liactive类名
        this.className = 'liactive';
        that.section[this.index].className = 'conactive'

    }

    // 删除功能
    removeControl(e) {
        e.stopPropagation();
        let index = this.parentNode.index
        console.log(index)
        that.lis[index].remove();
        that.section[index].remove();

        if (document.querySelector('.liactive')) return
        that.init();

        if (index <= 0) {
            index = 0;
        } else {
            index--
        }

        that.lis[index] && that.lis[index].click();
    }

    edit() {
        let text = this.innerText;
        this.innerHTML = `<input type="text" value="${text}" />`
        let input = this.children[0]
        input.select();
        input.onblur = function () {
            this.parentNode.innerHTML = this.value
        }

        input.ondblclick = function () {
            input.blur();
        }
    }
}


// 实例化tab类
new Tab2('#tab')