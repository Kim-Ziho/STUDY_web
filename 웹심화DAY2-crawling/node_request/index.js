const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const PORT = 8080;
const app = express();

app.use(cors());
app.use(morgan('dev'));
// body의 데이터를 받아오기 위한 샛팅
app.use(express.json());

// :id 유저에 대한 정보
// :id 값이 params에 담긴다.
app.get("/api/user/:id", (req, res) => {
  // < params >
  // path(http 명칭) = params(expresss에서 담기는 값)에 담긴다
  console.log(req.params);

  // < query >
  console.log(req.query)

  return res.json({
    params: req.params,
    query: req.query
  })
})

app.post('/api/users', (req, res) => {
  console.log(req.body);
  return res.json({
    body: req.body
  })
})

app.listen(PORT, () => console.log(`${PORT} 가동중`));
