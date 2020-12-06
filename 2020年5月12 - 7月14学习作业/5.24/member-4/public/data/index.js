// 1. 引入fs模块
const fs = require('fs')
// 2. 引入path模块
const path = require('path')
// 3. 引入数据库模块
const data = require('./backup.json')


// 导出方法
module.exports = {
    get: () => {
        return data
    },
    getData: (id) => {
        return data.find((item) => {
            return item.id === id
        })
    },
    postData: (getData) => {
        data.unshift(getData)

        let json = JSON.stringify(data)

        fs.writeFileSync(path.join(__dirname, 'backup.json'), json)

        return 'ok'
    },
    delData: (id) => {
        let ids = data.find((item) => {
            return item.id === id
        })
        data.splice(data.indexOf(ids), 1)

        let json = JSON.stringify(data)
        fs.writeFileSync(path.join(__dirname, 'backup.json'), json)
        return 'ok'
    },
    getByPage: (last, limit) => {
        let exist = data.find((item) => {
            return item.id === last
        })

        let skip = exist ? data.indexOf(exist) : -1

        return data.splice(skip + 1, limit)
    }
}