const express = require('express')
const app = express()

app.use('/static', express.static('static'))

app.get('/', (req, res) => res.sendFile(__dirname + '/static/index.html'))

app.listen(2001, () => console.log('port 2001!'))