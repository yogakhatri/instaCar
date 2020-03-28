const express = require('express')
const connection = require('./connection')
const routes = require('./routes')

const app = express()
app.use('', routes)

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server started at port ${port}`)
})