const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(cors());

app.get("/api/info", (req, res) => {
  return res.json({
    name: "jiho",
    job: "tutor",
  });
});

app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
