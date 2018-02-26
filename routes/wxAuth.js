var express = require('express');
var router = express.Router();
var log4js = require('log4js');
var logger = log4js.getLogger();

router.post('/auth', function(req, res) {
    console.info('test log');
    console.warn('this is a warning');
    res.send('hello world');
});

router.all('/getcoupon', function (req, res) {
    logger.debug('in getcoupon');
    res.status(200)
       .json({test: 'test'});
})

module.exports = router;