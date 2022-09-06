// async await를 활용하기 위해 해당 모듈이 promise 형식으로 리턴
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: "3.36.178.251",
  user: "JIHO",
  password: "1119",
  database: "order_system",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

module.exports = {pool}
// 객체로 내보내면 객체로 받아온다