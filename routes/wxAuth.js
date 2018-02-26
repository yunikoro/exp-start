var express = require('express');
var router = express.Router();
var log4js = require('log4js');

/*router.post('/auth', function(req, res) {
    console.info('test log');
    console.warn('this is a warning');
    res.send('hello world');
});*/

router.all('/getcoupon', function (req, res) {
    log4js.debug('in getcoupon');
    res.status(200)
       .jsonp({test: 'test'});
})

module.exports = router;