// 1. 导入模块
const path = require('path')
const fs = require('fs')
const database = require('./backup.json')
// 2. 使用module.exports导出这个模块
module.exports = {
    get: () => {
        return database
    },
    getId: (id) => {
        return database.find((item) => {
            return item.id === id
        })
    },
    addData: (member) => {
        database.unshift(member)

        let json = JSON.stringify(database)

        fs.writeFileSync(path.join(__dirname, 'backup.json'), json)
        return 'ok'
    },
    deleteItem: (id) => {
        let deleteId = database.find((item) => {
            return item.id === id
        })

        database.splice(database.indexOf(deleteId), 1)

        return 'ok'
    }
}