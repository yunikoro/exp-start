var log4js = require('log4js');

log4js.configure({
    appenders: {
        everything: { type: 'file', filename: 'all-the-logs.log'}
    },
    categories: {
        default: { appenders: ['everything'], level: 'debug'}
    }
});

modules.exports = log4js;