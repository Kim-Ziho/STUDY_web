const PORT = 8080;
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const { pool } = require("./db");
const path = require("path");
const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, fill, done) => {
      done(null, "public/");
    },
    filename: (req, file, done) => {
      console.log(file);
      const ext = path.extname(file.originalname);
      console.log(ext);
      const fileNameExeptExt = path.basename(file.originalname, ext);
      console.log(fileNameExeptExt);
      const saveFileName = fileNameExeptExt + Date.now() + ext;
      done(null, saveFileName);
    },
  }),
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/api/menus", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM menus");
    return res.json(data[0]);
  } catch (error) {
    return res.json({
      success: false,
      message: "전체 메뉴 조회에 실패하였습니다.",
    });
  }
});

app.get("/api/menus/:id", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM menus WHERE id = ?", [
      req.params.id,
    ]);
    console.log(data[0]);
    return res.json(data[0][0]);
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "메뉴 조회에 실패하였습니다.",
    });
  }
});

app.post("/api/menus", upload.single("file"), async (req, res) => {
  try {
    console.log(req.file);
    console.log(req.file.path);
    console.log(req.body);
    const data = await pool.query(
      `INSERT INTO menus (name, description, image_src)
      VALUES (?, ?, ?)`,
      [req.body.name, req.body.description, req.file.path]
    );

    return res.json({
      success: true,
      message: "메뉴 등록에 성공하였습니다.",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "메뉴 등록에 실패하였습니다.",
    });
  }
});

app.post("/api/orders", async(req, res) => {
  try {
    const data = await pool.query(`INSERT INTO orders (quantity, request_detail, menus_id)
    VALUES (?, ?, ?)`, [req.body.quantity, req.body.request_detail, req.body.menus_id]);

    return res.json({
      success: true,
      message: "주문에 성공하였습니다."
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false, 
      message: "주문에 실패하였습니다."
    });
  }
})

app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
