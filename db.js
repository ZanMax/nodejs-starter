const {db_host, db_name, db_user, db_password} = require('./config');

let mysql = require("mysql");
let pool = mysql.createPool({
    connectionLimit: 10,
    host: db_host,
    database: db_name,
    user: db_user,
    password: db_password
});

pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.release()
});

module.exports = pool;