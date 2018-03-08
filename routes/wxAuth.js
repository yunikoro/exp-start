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
    }, /*{
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
    } ,*//*{
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
    },*/ {
        id: 12,
        couponSeq: 'LJ123456',
        couponType: 2,
        couponBaseAmount: 0.01,
        couponAmount: 2.00,
        couponDiscount: null,
        couponChannel: 1001,
        name: '7号商品立减券',
        desc: '2元代金券',
        rule: [
            {
                ruleCode: 9,
                ruleValue: '7',
            }
        ],
        validEndTime: 123456789000
    }/*, {
        id: 13,
        couponSeq: 'ZQ123456',
        couponType: 4,
        couponBaseAmount: 10.00,
        couponAmount: null,
        couponDiscount: 7,
        couponChannel: 1001,
        name: '特殊司机7折券',
        desc: '7折扣券',
        rule: [
            {
                ruleCode: 10,
                ruleValue: '7',
            }
        ],
        validEndTime: 123456789000
    }*/
];

var goodsList = [
    {
        id: -1,
        list: [
            {
                content: "钙芝威化饼干",
                id: 2,
                isDiscount: true,
                img: "https://mgo.18jian.cn/uploads/2017-12-20/2017125a3a2936b0843.png",
                marketPrice: "2.30",
                name: "钙芝威化饼干",
                num: 2,
                price: "2.00"
            },
            {
                content: "维他奶+LIPO面包干",
                id: 3,
                isDiscount: true,
                img: "https://mgo.18jian.cn/uploads/2017-12-20/2017125a3a29fbba948.png",
                marketPrice: "6.20",
                name: "维他奶+LIPO面包干",
                num: 4,
                price: "5.80"
            },
            {
                content: "半价爆款",
                id: 4,
                isDiscount: true,
                img: "https://mgo.18jian.cn//uploads/2017-11-16/2017115a0ceea3f056e.png",
                marketPrice: "5.00",
                name: "红牛·战马饮料/瓶",
                num: 1,
                price: "2.50"
            },
            {
                content: "喝了和驴一样狠",
                id: 5,
                isDiscount: false,
                img: "https://mgo.18jian.cn//uploads/2017-11-16/2017115a0ceea3f056e.png",
                marketPrice: "5.00",
                name: "蓝驴·骡子饮料/瓶",
                num: 1,
                price: "5.00"
            },
            {
                content: "最好喝的水",
                id: 6,
                isDiscount: false,
                img: "https://mgo.18jian.cn//uploads/2017-11-16/2017115a0ceea3f056e.png",
                marketPrice: "2.50",
                name: "凉白开饮料/瓶",
                num: 4,
                price: "2.50"
            },
            {
                content: "提升醒脑，尊贵享受",
                id: 7,
                isDiscount: false,
                img: "https://mgo.18jian.cn//uploads/2017-11-16/2017115a0ceea3f056e.png",
                marketPrice: "4.00",
                name: "雀巢咖啡饮料/瓶",
                num: 1,
                price: "4.00"
            },
            {
                content: "脆脆脆",
                id: 8,
                isDiscount: false,
                img: "https://mgo.18jian.cn//uploads/2017-11-16/2017115a0ceea3f056e.png",
                marketPrice: "2.20",
                name: "汪汪雪饼",
                num: 1,
                price: "2.20"
            },
            {
                content: "贪多嚼不烂",
                id: 9,
                isDiscount: false,
                img: "https://mgo.18jian.cn//uploads/2017-11-16/2017115a0ceea3f056e.png",
                marketPrice: "10.00",
                name: "爷爷牛肉干",
                num: 8,
                price: "10.00"
            },
            {
                content: "没有黄曲霉",
                id: 10,
                isDiscount: true,
                img: "https://mgo.18jian.cn//uploads/2017-11-16/2017115a0ceea3f056e.png",
                marketPrice: "12.70",
                name: "咬升级花生",
                num: 1,
                price: "8.50"
            },
            {
                content: "红鲤鱼绿鲤鱼与驴",
                id: 11,
                isDiscount: false,
                img: "https://mgo.18jian.cn//uploads/2017-11-16/2017115a0ceea3f056e.png",
                marketPrice: "2.00",
                name: "绿鲤鱼",
                num: 64,
                price: "2.00"
            }

        ],
        name: "全部",
        sort: -1,
        status: false
    },
    {
        id: 0,
        list: [
            {
                content: "钙芝威化饼干",
                id: 2,
                isDiscount: true,
                img: "https://mgo.18jian.cn/uploads/2017-12-20/2017125a3a2936b0843.png",
                marketPrice: "2.30",
                name: "钙芝威化饼干",
                num: 2,
                price: "2.00"
            },
            {
                content: "维他奶+LIPO面包干",
                id: 3,
                isDiscount: true,
                img: "https://mgo.18jian.cn/uploads/2017-12-20/2017125a3a29fbba948.png",
                marketPrice: "6.20",
                name: "维他奶+LIPO面包干",
                num: 4,
                price: "5.80"
            },
            {
                content: "半价爆款",
                id: 4,
                isDiscount: true,
                img: "https://mgo.18jian.cn//uploads/2017-11-16/2017115a0ceea3f056e.png",
                marketPrice: "5.00",
                name: "红牛·战马饮料/瓶",
                num: 1,
                price: "2.50"
            }
        ],
        name: "优惠",
        sort: 0,
        status: false
    },
    {
        id: 1,
        list: [
            {
                content: "脆脆脆",
                id: 8,
                isDiscount: false,
                img: "https://mgo.18jian.cn//uploads/2017-11-16/2017115a0ceea3f056e.png",
                marketPrice: "2.20",
                name: "汪汪雪饼",
                num: 1,
                price: "2.20"
            },
            {
                content: "贪多嚼不烂",
                id: 9,
                isDiscount: false,
                img: "https://mgo.18jian.cn//uploads/2017-11-16/2017115a0ceea3f056e.png",
                marketPrice: "10.00",
                name: "爷爷牛肉干",
                num: 3,
                price: "10.00"
            },
            {
                content: "没有黄曲霉",
                id: 10,
                isDiscount: true,
                img: "https://mgo.18jian.cn//uploads/2017-11-16/2017115a0ceea3f056e.png",
                marketPrice: "12.70",
                name: "咬升级花生",
                num: 1,
                price: "8.50"
            },
            {
                content: "钙芝威化饼干",
                id: 2,
                isDiscount: true,
                img: "https://mgo.18jian.cn/uploads/2017-12-20/2017125a3a2936b0843.png",
                marketPrice: "2.30",
                name: "钙芝威化饼干",
                num: 2,
                price: "2.00"
            },
            {
                content: "维他奶+LIPO面包干",
                id: 3,
                isDiscount: true,
                img: "https://mgo.18jian.cn/uploads/2017-12-20/2017125a3a29fbba948.png",
                marketPrice: "6.20",
                name: "维他奶+LIPO面包干",
                num: 4,
                price: "5.80"
            }
        ],
        name: "零食",
        sort: 1,
        status: false
    },
    {
        id: 2,
        list: [
            {
                content: "半价爆款",
                id: 4,
                isDiscount: true,
                img: "https://mgo.18jian.cn//uploads/2017-11-16/2017115a0ceea3f056e.png",
                marketPrice: "5.00",
                name: "红牛·战马饮料/瓶",
                num: 1,
                price: "2.50"
            },
            {
                content: "喝了和驴一样狠",
                id: 5,
                isDiscount: false,
                img: "https://mgo.18jian.cn//uploads/2017-11-16/2017115a0ceea3f056e.png",
                marketPrice: "5.00",
                name: "蓝驴·骡子饮料/瓶",
                num: 1,
                price: "5.00"
            },
            {
                content: "最好喝的水",
                id: 6,
                isDiscount: false,
                img: "https://mgo.18jian.cn//uploads/2017-11-16/2017115a0ceea3f056e.png",
                marketPrice: "2.50",
                name: "凉白开饮料/瓶",
                num: 4,
                price: "2.50"
            },
            {
                content: "提升醒脑，尊贵享受",
                id: 7,
                isDiscount: false,
                img: "https://mgo.18jian.cn//uploads/2017-11-16/2017115a0ceea3f056e.png",
                marketPrice: "4.00",
                name: "雀巢咖啡饮料/瓶",
                num: 1,
                price: "4.00"
            }
        ],
        name: "饮料",
        sort: 2,
        status: false
    }
]

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

router.all('/getgoods', function (req, res) {
    logger.debug('in getcoupon');
    res.status(200)
        .json({
            err_msg: 'success',
            error_code: 0,
            data: goodsList
        });
})

// goodsList

module.exports = router;