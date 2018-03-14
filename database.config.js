var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: '120.79.83.68',
    user: 'root',
    password: 'ilikecrow451454',
    database: 'test'
});


module.exports = {
    pool: pool
}