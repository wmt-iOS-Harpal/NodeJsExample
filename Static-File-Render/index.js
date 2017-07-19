const express = require("express");
const path = require("path");

const app = express()

app.use(express.static("Assets"));
app.use(express.static("Files"));

app.use("/temp", express.static(path.join(__dirname, "Images")));

app.get("/index.php", function(req, res){
  res.sendFile(path.join(__dirname + "/Files/index.html"));
});



app.listen(3002, function() {
  console.log("Server running on : 3002");
});
