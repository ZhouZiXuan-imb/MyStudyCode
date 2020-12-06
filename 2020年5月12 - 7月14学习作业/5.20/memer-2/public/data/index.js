// 1. 导入包
const fs = require('fs')
const path = require('path')
const database = require('./backup.json')

module.exports = {
    get: () => {
        return database;
    },
    getById: function (id) {
        return database.find((item) => {
            return item.id === id
        })
    },
    add: (member) => {
        database.unshift(member)

        let json = JSON.stringify(database)

        fs.writeFileSync(path.join(__dirname, 'backup.json'), json)
        return 'ok'
    },
    deleteItem: (id) => {
        let ids = database.find((item) => {
            return item.id === id
        })
        // console.log(ids)
        database.splice(database.indexOf(ids), 1)

        let json = JSON.stringify(database)

        fs.writeFileSync(path.join(__dirname, 'backup.json'), json)
        return 'ok'
    }
}