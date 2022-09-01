const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const PORT = 8080;
const app = express();

const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    // 업로드 되는 파일 저장
    destination: (req, file, done) => {
      done(null, "public/");
    },
    // 업로드 되는 파일의 이름 지정
    filename: (req, file, done) => {
      done(null, file.originalname);
    },
    // 업로드되는 파일의 사이즈 limit
    // limits: {},
  }),
});

app.use(cors());
app.use(morgan("dev"));
// body의 데이터를 받아오기 위한 샛팅
app.use(express.json());

// public 경로로 오면 express의 public 폴더를 보여주겠다.
app.use("/public", express.static("public"));

// 파일 업로드는 POST 요청으로만 해야한다.
app.post("/api/file", upload.single("file"), (req, res) => {
  return res.json({ test: "OK" });
});

app.listen(PORT, () => console.log(`${PORT} 기동중`));
