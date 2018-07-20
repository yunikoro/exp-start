const express = require('express')
const router = express.Router()

const log4js = require('log4js')
const logger = log4js.getLogger()

const { cityList, dcList, orderList, orderDetail } = require('../mooc/report');

router.all('/dc/dcList', function(req, res, next) {
    setImmediate(() => {
        const dcRes = {
            data: dcList,
            err_msg: 'success',
            error_code: 0
        }
        res.json(dcRes);
    })
});

router.all('/scm/storage/getCity', function(req, res, next) {
    setImmediate(() => {
        const cityRes = {
            data: cityList,
            err_msg: 'success',
            error_code: 0
        }
        res.json(cityRes);
    })
});

router.all('/order-web/order/driver/order/:driverId', function(req, res, next) {
    logger.debug('dirver order -- params', req.params);
    setImmediate(() => {
        const orderInfo = {
            data: orderList,
            err_msg: 'success',
            error_code: 0
        };
        res.json(orderInfo);
    })
});

router.all('/order-web/order/orderInfo/:orderSn', function(req, res, next) {
    logger.debug('orderInfo -- params', req.params);
    setImmediate(() => {
        const orderdetail = {
            data: orderDetail,
            err_msg: 'success',
            error_code: 0
        };
        res.json(orderdetail);
    })
})

router.all('/driver-web/driver/getBonusListByDriverId', function(req, res, next) {
    logger.debug('getBonusListByDriverId -- query', req.query);
    setImmediate(() => {
        const bonusList = {
            data: [],
            err_msg: 'success',
            error_code: 0
        }
        res.json(bonusList);
    })
});

module.exports = router;