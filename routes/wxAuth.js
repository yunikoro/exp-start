var express = require('express');
var router = express.Router();
var log4js = require('log4js');
var logger = log4js.getLogger();

const couponList = [
    {
        id: 10,
        coupon_type: 3,
        sku_alias: '',
        manzeng_good_id: null,
        coupon_amount: 10.00,
        coupon_base_amount: 30.00,
        user_id: 5095,
        valid_end_time: 1530415653,
        explain: '不可用于特价商品， 一次只能使用一张'
    },
    {
        id: 11,
        coupon_type: 4,
        sku_alias: '',
        manzeng_good_id: null,
        coupon_amount: 0.5,
        coupon_base_amount: 30.00,
        user_id: 5095,
        valid_end_time: 1530615653,
        explain: '不可用于特价商品， 一次只能使用一张'
    },
    {
        id: 12,
        coupon_type: 2,
        sku_alias: '',
        manzeng_good_id: null,
        coupon_amount: 10.00,
        coupon_base_amount: 0.01,
        user_id: 5095,
        valid_end_time: 1534495693,
        explain: '不可用于特价商品， 一次只能使用一张'
    },
    {
        id: 13,
        coupon_type: 6,
        sku_alias: '小黄鸭',
        manzeng_good_id: 52,
        coupon_amount: 0.5,
        coupon_base_amount: -1,
        user_id: 5095,
        valid_end_time: 1530492653,
        explain: '不可用于特价商品， 一次只能使用一张'
    },
];


router.post('/auth', function(req, res) {
    console.info('test log');
    console.warn('this is a warning');
    res.send('hello world');
});

router.all('/getcoupon', function (req, res) {
    logger.debug('in getcoupon');
    res.status(200)
       .json(couponList);
})

module.exports = router;