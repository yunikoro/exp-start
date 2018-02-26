var express = require('express');
var router = express.Router();

router.post('/auth', function(req, res) {
    console.info('test log');
    console.warn('this is a warning');
    res.send('hello world');
});

router.all('/getcoupon', function (req, res) {
    logger.debug('in getcoupon');
    res.status(200)
       .jsonp({test: 'test'});
})

module.exports = router;