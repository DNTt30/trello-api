const express = require('express')
const app = express()

const port = 8017

app.get('/', function (req, res) {
    res.send('<h1>Hello world NodeJS híihis</h1>')
})

app.listen(port, () => {
    console.log(`✅ Server is running at http://localhost:${port}/`)
})
