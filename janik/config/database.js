const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root_password',
  database: 'BD'
});

module.exports = pool;
