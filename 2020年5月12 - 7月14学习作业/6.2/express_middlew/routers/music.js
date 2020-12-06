const express = require('express')

// 创建一个路由
const music = express.Router()

music.get('/', (req, res) => {
    res.send('这是音乐首页')
})

music.get('/a', (req, res) => {
    res.send('这是音乐首页a')
})
music.get('/b', (req, res) => {
    res.send('这是音乐首页b')
})
music.get('/c', (req, res) => {
    res.send('这是音乐首页c')
})

module.exports = music