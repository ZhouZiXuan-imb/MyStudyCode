const express = require('express')
const app = express();

app.use('/admin', (req, res, next) => {
    console.log('111')
    next();
})

app.use('/admin', (req, res, next) => {
    res.send('登陆成功')
})

app.use((req, res) => {
    res.status(404).send(`
    <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1591065108&di=376043dcf2a98963adcee7387ba4f891&src=http://hbimg.b0.upaiyun.com/df0c22c77dfb19be1c428991f8c0331e7249ac4d4ab4-C4v0rW_fw658">
    `)
})


app.listen(80)