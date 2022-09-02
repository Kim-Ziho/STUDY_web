const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  // aws ip
  host: "3.36.178.251",
  // mysql username
  user: "JIHO",
  // mysql user password
  password: "1119",
  // db name
  database: "order_system",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = { pool };
