let vm = Vue.createApp({
    data() {
        return {
            id: '',
            name: '',
            sreach: "",
            brandlist: [{
                    id: 1,
                    name: "奔驰",
                    ctime: new Date().toLocaleDateString(),
                },
                {
                    id: 2,
                    name: "宝马",
                    ctime: new Date().toLocaleDateString(),
                },
                {
                    id: 3,
                    name: "长安奔奔",
                    ctime: new Date().toLocaleDateString(),
                },
                {
                    id: 4,
                    name: "千里马",
                    ctime: new Date().toLocaleDateString(),
                },
            ],
        }
    },
    methods: {
        // 1.查询
        sreachData() {
            return this.brandlist.filter((item) => {
                return item.name.includes(this.sreach)
            })
        },
        // 2.添加
        addData() {
            if (!(this.id && this.name)) return alert('不能为空!')
            let newobj = {
                id: this.id,
                name: this.name,
                ctime: new Date().toLocaleDateString(),
            }
            this.brandlist.push(newobj)
        },
        // 3.删除
        removeData(id) {
            let index = this.brandlist.findIndex((item) => {
                return item.id == id
            })
            this.brandlist.splice(index, 1)
        }
    }
}).mount("#app")