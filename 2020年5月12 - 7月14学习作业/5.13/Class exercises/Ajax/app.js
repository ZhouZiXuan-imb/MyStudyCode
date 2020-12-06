let express = require('express')
let path = require('path')
let app = express();

app.use(express.static(path.join(__dirname, 'public')))


app.get('/request', (req, res) => {
    // console.log()
    res.send(req.query)
})

app.listen(3000, () => {
    console.log('请访问  http://localhost:3000')
})