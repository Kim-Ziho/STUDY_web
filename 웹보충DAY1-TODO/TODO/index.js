const express = require("express");
const {pool} = require("./db")
const app = express();
app.use(express.static(__dirname + "/views"))

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/todos", async (request, response) => {
  try {
    const data = await pool.query("select * from todos")
    return response.json(data[0])
  } catch(error) {
    return response.json({
      success: false,
      message: "에러가 발생하였습니다"
    })
  }
})

// app.post("")

app.listen(8080, () => {console.log("hi 8080")})