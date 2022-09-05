const pool = require("mysql2/promise").createPool({
    // 여러분의 aws ip
    host: "3.36.178.251",
    // user id
    user: "JIHO",
    // password
    password: "1119",
    // db명
    database: "jony",
    // 
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
})

module.exports = { pool }