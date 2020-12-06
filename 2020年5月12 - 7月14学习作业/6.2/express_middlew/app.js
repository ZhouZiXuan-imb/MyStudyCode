const express = require('express')
const app = express();
const music = require('./routers/music')
const home = require('./routers/home')

app.use('/music', music)
app.use('/home', home)


app.listen(3000)