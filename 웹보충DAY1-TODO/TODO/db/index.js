const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "3.36.178.251",
  user: "JIHO",
  password: "1119",
  database: "jony",
  waitForConnecions: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = { pool };
