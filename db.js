// db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',        // 本機資料庫
  user: 'root',             // 你的 MySQL 帳號
  password: '930121',      // 👈 請填上你剛剛設定的 root 密碼
  database: 'mobile_payment',
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool.promise();
