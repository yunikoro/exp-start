var express = require('express');
var router = express.Router();

router.post('/auth', function(req, res) {
    console.info('test log');
    console.warn('this is a warning');
    res.send('hello world');
});

module.exports = router;