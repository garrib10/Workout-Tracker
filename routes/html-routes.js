const  app = require("express").Router();
const path = require("path");

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

app.get("/", (req, res)=> {
  res.sendFile(path.join(__dirname, "../public/index.html"));

})
module.exports = app;
