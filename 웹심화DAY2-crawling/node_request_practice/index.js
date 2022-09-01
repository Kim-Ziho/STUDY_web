const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const PORT = 8080;
const app = express();

app.use(cors());
app.use(morgan('dev'));
// body의 데이터를 받아오기 위한 샛팅
app.use(express.json());

app.get("/user/:id", (req, res) => {
  try {
    return res.json({
      getid: true,
      id: req.params.id,
      name: req.query.name
    })
  } catch (error) {
    return res.json({getid:false})
  }
})

app.post("/user", (req, res) => {
  try {
    return res.json({
      signup: true,
      id: req.body.id,
      password: req.body.password
    })
  } catch (error) {
    return res.json({
      signup:false
    })
  }
})

app.patch("/user/:id", (req, res) => {
  try {
    return res.json({
      update: true,
      id: req.params.id,
      name: req.body.name
    })
  } catch (error) {
    return res.json({
      updatd:false
    })
  }
})

app.delete("/user/:id", (req, res) => {
  try {
    return res.json({
      delete: true,
      id:req.params.id
    })
  } catch (error) {
    return res.json({
      delete:false
    })
  }
})

app.listen(PORT, () => console.log(`${PORT} 기동중`));