const express = require("express");
const app = express();
const { pool } = require("./db");
const PORT = 8080;
const morgan = require('morgan');

const cors = require("cors");
app.use(cors());

// Post 요청시 body 데이터 JSON 받아오는 방법
app.use(express.json());

//morgan활용
app.use(morgan('dev'));

app.get("/api/menus", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM menus");
    if (data[0]) {
      return res.json(data[0]);
    }
  } catch (error) {
    return res.json(error);
  }
});

app.post("/api/menus", async (req, res) => {
  try {
// console.log(req.body);

    // //첫번째 방법
    // const data = await pool.query(
    //   `
    //     INSERT INTO menus (menu_name, menu_description)
    //     VALUES
    //     ("${req.body.menu_name}", "${req.body.menu_description}")
    //   `
    // );
    // return res.json(data);

    //두번째 방법
    const data = await pool.query("INSERT INTO menus (menu_name, menu_description) VALUES (?, ?)",
    [req.body.menu_name, req.body.menu_description])
    return res.json(data);

    // return res.json(req.body);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
