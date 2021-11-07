let express = require('express');
var path = require('path');

let router = express.Router();


let loginController = require('../controllers/login.controller');

router.get('/',(request, response) => {
    response.sendFile(path.join(__dirname + '/HTML/login.html'));
});

router.get('/list', loginController.list);
router.post('/auth', loginController.auth);

module.exports = router