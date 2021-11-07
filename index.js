const express = require('express')
var session = require('express-session');
let path = require('path')
let bodyParser = require('body-parser')

const app = express()

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

let login = require('./routes/login')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', login)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})