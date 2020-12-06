const express = require('express')
const fs = require('fs')
const app = express();

app.use('/admin', (req, res, next) => {
    // res.send('网页正在维护中')
    fs.writeFile('../05.txt', (err, result) => {
        if (err !== null) {
            next(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(80)