let express = require('express')
var path = require('path');

let mysql = require('mysql')
let config = require('../config/config')
let connection = mysql.createConnection(config)

let router = express.Router();

router.get('/',(request, response) => {
    response.sendFile(path.join(__dirname + '/HTML/login.html'));
});

router.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/list');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

module.exports = router