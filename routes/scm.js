const express = require('express')
const router = express.Router()

const log4js = require('log4js')
const logger = log4js.getLogger()

const { allocateList, boxDetail, allocateHeader, boxDetailList, stationList } = require('../mooc/allocate')

const allAllocate = {
    data: {
        totalCount: 6,
        totalPage: 3,
        allocateDTOList: allocateList,
    },
    err_msg: 'success',
    error_code: 0,
}

/* GET users listing. */
router.all('/allocate/search', function(req, res, next) {
    setImmediate(function() {
        logger.debug('params', req.params)
        logger.debug('query', req.query)
        logger.debug('body', req.body)
        res.json(allAllocate)
    })
})

router.all('/allocate/boxDetail', function(req,res, next) {
    setImmediate(() =>{
        logger.debug('boxDetail -- query', req.query);
        boxDetail.boxSn = req.query.boxSn;
        const result =  {
            data: boxDetail,
            err_msg: 'success',
            error_code: 0,
        }
        res.json(result);
    });
});

router.all('/allocate/openAllocateInfo/:boxAllocateSn', function(req, res, next) {
    logger.debug('openAllocateInfo -- params', req.params);
    setImmediate(() => {
        const result = {
            data: {
                allocateInfoDTO: allocateHeader
            },
            err_msg: 'success',
            error_code: 0,
        }
        res.json(result);
    });
});

router.all('/allocate/openAllocate/:boxAllocateSn', function(req, res, next) {
    logger.debug('openAllocate -- params', req.params);
    logger.debug('openAllocate -- query', req.query);
    setImmediate(() => {
        const result = {
            data: {
                totalCount: 6,
                totalPage: 3,
                boxList: boxDetailList,
            },
            err_msg: 'success',
            error_code: 0,
        }
        res.json(result);
    });
});

router.all('/allocate/newAllocate', function(req, res, next) {
    setImmediate(() => {
        const allocateInfo = req.body;
        logger.debug('newAllocate -- body', allocateInfo);
        const result = {
            data: 'FB20180306223674',
            err_msg: 'success',
            error_code: 0,
        }
        res.json(result);
    });
});

router.all('/allocate/insertBox', function(req, res, next) {
    setImmediate(() => {
        const boxlist = req.body;
        logger.debug('insertBox -- body', boxlist);
        const result = {
            data: '',
            err_msg: 'success',
            error_code: 0,
        }
        res.json(result);
    });
});

router.all('/scm-web/station/list', function(req, res, next) {
    setImmediate(() => {
        logger.debug('tationlist -- body');
        const result = {
            data: stationList,
            err_msg: 'success',
            error_code: 0,
        }
        res.json(result)
    })
})

router.all('/driver/promotion/event_detail', function(req, res, next) {
    setImmediate(() => {
        logger.debug
    })
})

module.exports = router
