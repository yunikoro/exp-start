const express = require('express')
const router = express.Router()

const log4js = require('log4js')
const logger = log4js.getLogger()

const allocateList = require('../mooc/allocate')

const allAllocate = {
    data: {
        totalCount: 6,
        totalPage: 3,
        allocateDTOList: allocateList,
        err_msg: 'success',
        error_code: 0,
    },
}

/* GET users listing. */
router.all('/allocate/findAll', function(req, res, next) {
    setImmediate(function() {
        logger.debug('params', req.params)
        logger.debug('query', req.query)
        logger.debug('body', req.body)
        
    })
    res.json(allAllocate)
})

module.exports = router
