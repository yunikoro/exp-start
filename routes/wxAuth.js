var express = require('express');
var router = express.Router();
var log4js = require('log4js');
var logger = log4js.getLogger();

var couponList = [
    {
        id: 4,
        couponSeq: 'MJ123456',
        couponType: 3,
        couponBaseAmount: 2.00,
        couponAmount: 1.00,
        couponDiscount: null,
        couponChannel: 1001,
        name: '新用户专享券',
        desc: '满2元可立减1元',
        rule: [
            {
                ruleCode: 10,
                ruleValue: '3',
            }
        ],
        validEndTime: 123456789
    }, {
        id: 5,
        couponSeq: 'MJ123456',
        couponType: 3,
        couponBaseAmount: 20.00,
        couponAmount: 5.00,
        couponDiscount: null,
        couponChannel: 1001,
        name: null,
        desc: '满20元可立减5元',
        rule: [
            {
                ruleCode: 10,
                ruleValue: '5',
            }
        ],
        validEndTime: 123456789
    }, {
        id: 6,
        couponSeq: 'MJ123456',
        couponType: 3,
        couponBaseAmount: 5.00,
        couponAmount: 3.00,
        couponDiscount: null,
        couponChannel: 1001,
        name: '老司机特惠',
        desc: '满5元可立减3元',
        rule: [
            {
                ruleCode: 10,
                ruleValue: '5',
            }
        ],
        validEndTime: 123456789
    }, {
        id: 7,
        couponSeq: 'MJ123456',
        couponType: 3,
        couponBaseAmount: 50.00,
        couponAmount: 15.00,
        couponDiscount: null,
        couponChannel: 1001,
        name: '土豪特惠',
        desc: '满50元可立减15元',
        rule: [
            {
                ruleCode: 10,
                ruleValue: '5',
            }
        ],
        validEndTime: 123456789000
    }, {
        id: 8,
        couponSeq: 'ZQSKU123456',
        couponType: 4,
        couponBaseAmount: null,
        couponAmount: 0.00,
        couponDiscount: 7,
        couponChannel: 1001,
        name: 'id为6的商品特惠',
        desc: '固定商品内可7折',
        rule: [
            {
                ruleCode: 9,
                ruleValue: '6',
            }
        ],
        validEndTime: 123456789000
    }, {
        id: 10,
        couponSeq: 'ZQ123456',
        couponType: 4,
        couponBaseAmount: 30,
        couponAmount: 5.00,
        couponDiscount: 5,
        couponChannel: 1001,
        name: null,
        desc: '5折券',
        rule: [
            {
                ruleCode: 10,
                ruleValue: '3',
            }
        ],
        validEndTime: 123456789000
    }, {
        id: 11,
        couponSeq: 'LJ123456',
        couponType: 2,
        couponBaseAmount: 0.01,
        couponAmount: 5.00,
        couponDiscount: null,
        couponChannel: 1001,
        name: null,
        desc: '无门槛5元代金券',
        rule: [
            {
                ruleCode: 10,
                ruleValue: '3',
            }
        ],
        validEndTime: 123456789000
    }, {
        id: 12,
        couponSeq: 'LJ123456',
        couponType: 2,
        couponBaseAmount: 0.01,
        couponAmount: 2.00,
        couponDiscount: null,
        couponChannel: 1001,
        name: '3号商品立减券',
        desc: '3元代金券',
        rule: [
            {
                ruleCode: 9,
                ruleValue: '3',
            }
        ],
        validEndTime: 123456789000
    }
];


router.post('/auth', function(req, res) {
    console.info('test log');
    console.warn('this is a warning');
    res.send('hello world');
});

router.all('/getcoupon', function (req, res) {
    logger.debug('in getcoupon');
    res.status(200)
       .json({
           err_msg: 'success',
           error_code: 0,
           data: couponList
       });
})

module.exports = router;