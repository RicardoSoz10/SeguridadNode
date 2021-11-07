let express = require('express');
let router = express.Router();

let loginController = require('../controllers/login.controller');

router.get('/list', loginController.list);
router.post('/auth', loginController.auth);

module.exports = router