const mysql = require('mysql2/promise');

// require('dotenv').config();

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   //: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });


const pool = mysql.createPool({
  host: 'localhost',
  // port: 3306,
  user: 'root',
  password: 'root_password',
  database: 'BD'
});

module.exports = pool;
