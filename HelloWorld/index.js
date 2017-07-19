
const express = require("express");

const app = express();

app.get('/', function(req, res) {
  res.send("Hello Harpal");
});

app.listen(3000, function() {
  console.log("Server running on : 3000");
});
