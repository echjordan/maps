const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {resolve} = require('path')
const volleyball = require('volleyball')

module.exports = app
.use(bodyParser.urlencoded({ extended: true }))
.use(bodyParser.json())
.use(volleyball)
.use(express.static(resolve(__dirname , '..' , 'public')))
.get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))


app.listen(1337, () => {console.log('Server is listening on port 1337')})
