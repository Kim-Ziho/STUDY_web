const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { pool } = require("./db");
const multer = require("multer");
const path = require("path"); // node 내장 모듈
const { rmSync } = require("fs");
const PORT = 8080;

const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, done) => { // 파일 업로드 위치
      done(null, "public/")
    },
    filename: (req, file, done) => { // 파일 저장 방식
      console.log(file)
      // 원본 파일이름 + 날짜 + 확장자 Date.now() 상세 년월일시초
      const ext = path.extname(file.originalname) // 확장자 추출
      const fileNameExeptExt = path.basename(file.originalname, ext); // 확장자를 제외한 이름
      const saveFileName = fileNameExeptExt + Date.now() + ext;
      done(null, saveFileName)
    }
  })
})

app.use(cors()); // client cors 이슈 해결
app.use(morgan("dev")); // http log
app.use(express.json()); // body 데이터 받아오기
// public 경로에 오면 express.static을 보여줘라, app.use("라우팅 경로")
app.use("/public", express.static("public")); // 전역 폴더 셋팅

app.get("/api/menus", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM menus");
    return res.json(data[0]);
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "전체 메뉴 목록 조회에 실패하였습니다.",
    });
  }
});

app.get("/api/menus/:id", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM menus WHERE id = ?", [req.params.id]);
    console.log(data[0]);
    return res.json(data[0][0]);
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "메뉴 조회에 실패하였습니다."
    })
  }
})

// post("라우터 주소", upload, (req, res)) upload를 거쳐간다 middleware
app.post("/api/menus", upload.single("file"), async (req, res) => {
  try {
    console.log(req.file);
    console.log(req.file.path);
    console.log(req.body);
    const data = await pool.query(`INSERT INTO menus (name, description, image_src)
      VALUES (?, ?, ?)`, [req.body.name, req.body.description, req.file.path]);
    return res.json({
      success: true,
      message: "메뉴 등록에 성공하였습니다."
    })
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "메뉴 등록에 실패하였습니다."
    })
  }
})

app.patch("/api/menus/:id", async (req, res) => {
  try {
    console.log(req.params);
    const data = await pool.query(`UPDATE menus SET name = ?, description = ? WHERE id =?`,
      [req.body.name, req.body.description, req.params.id]);
    return res.json({
      success: true,
      message: "메뉴 정보 수정에 성공하였습니다."
    })
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "메뉴 정보 수정에 실패하였습니다."
    })
  }
})

// 수정 id를 받아서 image_src를 업데이트
app.post("/api/menus/:id/image", upload.single('file'), async (req, res) => {
  try { // id를 찾아서 경로를 찾아낸 후 그것에 해당되는 이미지를 삭제 (필요하지만 스킵)
    const data = await pool.query(`UPDATE menus SET image_src = ? WHERE ID = ?`,
      [req.file.path, req.params.id])

    return res.json({
      success: true,
      message: "메뉴 이미지 수정에 성공하였습니다."
    })
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "메뉴 이미지 수정에 실패하였습니다."
    })
  }
})

app.delete("/api/menus/:id", async (req, res) => {
  try {
    const data = await pool.query("DELETE FROM menus WHERE id = ?", [req.params.id]);
    
    return res.json({
      success: true,
      message: "메뉴 삭제에 성공하였습니다."
    })
  } catch(error) {
    console.log(error);
    return res.json({
      success: false,
      message: "메뉴 삭제에 실패하였습니다."
    })
  }
})

// orders 파트 ////////////////////////////////////////////////////////////
app.get("/api/orders", async (req, res) => {
  try {
    // LEFT JOIN
    // INNER JOIN -> null로 된 결과물은 가져오지 않는다.
    const data = await pool.query(`
    SELECT a.id, quantity, request_detail, name, description
    FROM orders as a
    INNER JOIN menus as b
    ON a.menus_id = b.id
    ORDER BY a.id DESC
    `)
    return res.json(data[0]);
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "전체 주문 목록 조회에 실패하였습니다."
    })
  }
})

app.post("/api/orders", async (req, res) => {
  try {
    // quantity (수량)
    // request_detail (주문시 요청사항)
    // menus_id (DB에 menus_id를 저장) menus 테이블에 해당 id가 존재해야한다(없는 id를 넣으면 에러)
    const data = await pool.query(`
    INSERT INTO orders (quantity, request_detail, menus_id)
    VALUES (?, ?, ?)`, [req.body.quantity, req.body.request_detail, req.body.menus_id]);

    return res.json({
      success: true,
      message: "주문에 성공하였습니다."
    })
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "주문에 실패하였습니다."
    })
  }
})

app.get("/api/orders/:id", async (req, res) => {
  try {
    const data = await pool.query(`
    SELECT a.id, quantity, request_detail, name, description
    FROM orders as a
    INNER JOIN menus as b
    ON a.menus_id = b.id
    WHERE a.id = ?
    `,
      [req.params.id]);
    return res.json(data[0][0]);
  } catch (error) {
    console.log(error)
    return res.json({
      success: false,
      message: "주문 내역 조회에 실패했습니다."
    })
  }
})

app.patch("/api/orders/:id", async (req, res) => {
  try {
    const data = await pool.query(`UPDATE orders SET quantity = ?, request_detail = ?, menus_id = ? WHERE id = ?`,
      [req.body.quantity, req.body.request_detail, req.body.menus_id, req.params.id])
    return res.json({
      success: true,
      message: "주문 내역 수정에 성공했습니다."
    })
  } catch (error) {
    console.log(error)
    return res.json({
      success: false,
      message: "주문 내역 수정에 실패했습니다."
    })
  }
})

app.delete("/api/orders/:id", async (req, res) => {
  try {
    const data = await pool.query(`DELETE FROM orders WHERE id = ?`, [req.params.id]);
    return res.json({
      success: true,
      message: "주문 내역 삭제에 성공했습니다."
    })
  } catch (error) {
    console.log(error)
    return res.json({
      success: false,
      message: "주문 내역 삭제에 실패했습니다."
    })
  }
})

app.listen(PORT, () => console.log(`${PORT} 기동중`));

//scp -i ~/.ssh/ssafy-instance.cer -r order_system_operation ubuntu@ip:~