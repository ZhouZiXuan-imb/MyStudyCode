// 1. 引入模块
// 1.1 引入fs模块
const fs = require('fs')
// 1.2 引入path模块
const path = require('path')
// 1.3 引入数据库文件
const database = require('./backup.json')

// 2. 使用module.exports导出方法
module.exports = {
    get: () => {
        return database
    },
    getIdData: (id) => {
        return database.find((item) => {
            return item.id === id
        })
    },
    addData: (data) => {
        database.unshift(data)

        let json = JSON.stringify(database)

        fs.writeFileSync(path.join(__dirname, 'backup.json'), json)

        return 'ok'
    },
    deleteData: (id) => {
        let ids = database.find((item) => {
            return item.id === id
        })
        database.splice(database.indexOf(ids), 1)

        let json = JSON.stringify(database)

        fs.writeFileSync(path.join(__dirname, 'backup.json'), json)

        return 'ok'
    }
}