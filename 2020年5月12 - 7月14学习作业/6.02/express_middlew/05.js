const express = require('express')
const fs = require('fs')
const app = express();

app.get('/index', (req, res) => {
    throw new Error('程序发生未知错误')
})

app.use((err, req, res, next) => {
    res.status(500).send(err.mesaage)
})


app.listen(80)