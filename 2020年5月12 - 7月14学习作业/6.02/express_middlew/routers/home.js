const express = require('express')


const home = express.Router();

home.get('/a', (req, res) => {
    res.send('这是home首页')
})

home.get('/b', (req, res) => {
    res.send('这是home推荐页')
})
home.get('/c', (req, res) => {
    res.send('这是home按时灯笼裤骄傲两款手机的卢卡斯觉得')
})

module.exports = home